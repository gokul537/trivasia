'use client';
import { Calendar, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to get valid image URL
  const getImageUrl = (imageUrl, index = 0) => {
    const fallbackImages = [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&q=80",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
    ];
    
    if (!imageUrl || imageUrl.includes('placeholder') || imageUrl.startsWith('/')) {
      return fallbackImages[index % fallbackImages.length];
    }
    
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    
    return `https://api.trivasia.com${imageUrl}`;
  };

  useEffect(() => {
    // Fallback sample blogs with more details
    const sampleBlogs = [
      {
        id: 1,
        title: "Top Study Destinations for Indian Students in 2026",
        author: "Trivasia Team",
        created_at: "2025-12-15",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
        category: "Study Abroad",
        excerpt: "Discover the best countries for higher education with excellent universities and career opportunities."
      },
      {
        id: 2,
        title: "Complete Guide to Student Visa Applications",
        author: "Trivasia Team",
        created_at: "2025-12-10",
        image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&q=80",
        category: "Education",
        excerpt: "Step-by-step guide to successfully apply for student visas to study abroad."
      },
      {
        id: 3,
        title: "Best Holiday Packages for Families",
        author: "Trivasia Team",
        created_at: "2025-12-05",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
        category: "Travel",
        excerpt: "Explore amazing family-friendly destinations with our curated holiday packages."
      },
      {
        id: 4,
        title: "Immigration Process Simplified",
        author: "Trivasia Team",
        created_at: "2025-12-01",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
        category: "Immigration",
        excerpt: "Everything you need to know about immigration processes and requirements."
      },
      {
        id: 5,
        title: "Scholarships for International Students",
        author: "Trivasia Team",
        created_at: "2025-11-28",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
        category: "Study Abroad",
        excerpt: "Find out about various scholarship opportunities available for studying abroad."
      },
      {
        id: 6,
        title: "Top 10 Travel Destinations for 2026",
        author: "Trivasia Team",
        created_at: "2025-11-25",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
        category: "Travel",
        excerpt: "Must-visit destinations that should be on your travel list this year."
      }
    ];

    fetch('https://api.trivasia.com/api/blogs/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('API not available');
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setBlogs(data);
        } else {
          setBlogs(sampleBlogs);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Blog API not available, using sample data:', err.message);
        setBlogs(sampleBlogs);
        setLoading(false);
        setError(null); // Clear error since we have fallback data
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-12 px-4 md:px-8 lg:px-16 min-h-screen">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <p className="text-red-500 uppercase tracking-widest font-medium mb-2">
            Blog
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Explore Our <span className="text-red-500">Latest Articles</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights on studying abroad, travel destinations, 
            and immigration opportunities.
          </p>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No blogs available at the moment.</p>
          </div>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={getImageUrl(blog.image, blogs.indexOf(blog))}
                  alt={blog.title}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover"
                  unoptimized
                />
                <span className="absolute top-52 left-4 bg-red-500 text-white px-3 py-1 text-sm rounded-full">
                  {blog.category || 'Travel'}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <PenTool className="w-4 h-4 text-red-500" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-red-500" />
                    {blog.created_at}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-800 mb-4 line-clamp-3">
                  {blog.title}
                </h3>

                {/* Explore Link */}
                <Link
                  href={`/blogs/${blog.id}`}
                  className="text-red-500 font-medium hover:underline mt-auto flex items-center gap-1"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
