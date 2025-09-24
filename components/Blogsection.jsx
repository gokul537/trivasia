'use client';
import { Calendar, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.trivasia.com/api/blogs/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch blogs');
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

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
                src={blog.image} // This should be full URL from your API
                alt={blog.title}
                width={400}
                height={224}
                className="w-full h-56 object-cover"
                unoptimized // Needed if image is from external URL
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
