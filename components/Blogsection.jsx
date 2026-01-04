'use client';
import { Calendar, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to get valid image URL
  const getImageUrl = (imageUrl, index = 0) => {
    const fallbackImages = [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&q=80",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
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
    // Fallback sample blogs
    const sampleBlogs = [
      {
        id: 1,
        title: "Top Study Destinations for Indian Students in 2026",
        author: "Trivasia Team",
        created_at: "2025-12-15",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
        category: "Study Abroad"
      },
      {
        id: 2,
        title: "Complete Guide to Student Visa Applications",
        author: "Trivasia Team",
        created_at: "2025-12-10",
        image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&q=80",
        category: "Education"
      },
      {
        id: 3,
        title: "Best Holiday Packages for Families",
        author: "Trivasia Team",
        created_at: "2025-12-05",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
        category: "Travel"
      }
    ];

    fetch('https://api.trivasia.com/api/blogs/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Using sample blogs');
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
        setError(null); // Clear error since we have fallback
      });
  }, []);

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-white to-orange-50 py-12 px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading latest articles...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <p className="text-red-500 uppercase tracking-widest font-medium">
            Blog
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Cast Your Eyes Upon <br />
            Our <span className="text-red-500">Newest Article</span>
          </h2>
        </div>
        <Link
          href="/blogs"
          className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full flex items-center gap-2 w-max"
        >
          View all →
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
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
                {blog.title}
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
                href={`/blogs/${blog.id}`} // Next.js detail page
                className="text-red-500 font-medium hover:underline mt-auto flex items-center gap-1"
              >
                Explore More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
