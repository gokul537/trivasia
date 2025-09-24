'use client';
import Image from "next/image";
import { useEffect, useState, use } from "react";

export default function BlogDetailClient({ params }) {
  // Unwrap params properly using React.use
  const { id } = use(params); // ✅ Fixes the warning

  const [blog, setBlog] = useState({});
  console.log("blog",blog)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.trivasia.com/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch blog");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!blog) return <p className="text-red-500">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog?.blog.title}</h1>
      <p className="text-gray-500 mb-6">
        By {blog?.blog.author} | {new Date(blog?.blog.created_at).toLocaleDateString()}
      </p>

      {blog?.blog.image && (
        <div className="relative w-full h-64 md:h-96 mb-6">
          <Image
            src={blog?.blog.image.startsWith("http") ? blog?.blog.image : `https://api.trivasia.com${blog?.blog.image}`}
            alt={blog?.blog.title}
            fill
            className="object-cover rounded-lg shadow-md"
            unoptimized
          />
        </div>
      )}

      <div className="prose prose-lg md:prose-xl max-w-full text-gray-800">
        {blog?.blog.content}
      </div>
    </div>
  );
}
