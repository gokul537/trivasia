import { Calendar, PenTool } from "lucide-react";

import blogOne from "@/asset/blog1.jpg";
import blogTwo from "@/asset/blog2.jpg";
import blogThree from "@/asset/blog3.jpg";
import Image from "next/image";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      category: "Coaching",
      image: blogOne,
      author: "Trivasia",
      date: "18 March 2022",
      title:
        "Achieve Your Dream of IELTS Excellence with Professional IELTS Coaching!",
      link: "#",
    },
    {
      id: 2,
      category: "Study",
      image: blogTwo,
      author: "Trivasia",
      date: "26 May 2023",
      title:
        "Studying in the UK from India - A Comprehensive Guide for Prospective Students",
      link: "#",
    },
    {
      id: 3,
      category: "Study",
      image: blogThree,
      author: "Trivasia",
      date: "30 April 2022",
      title:
        "8 Must-Know Tips for New Stanford Applicants - Get Your Universities in Stanford",
      link: "#",
    },
  ];

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
        <a
          href="#"
          className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full flex items-center gap-2 w-max"
        >
          View all →
        </a>
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
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-52 left-4 bg-red-500 text-white px-3 py-1 text-sm rounded-full">
                {blog.category}
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
                  {blog.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-800 mb-4 line-clamp-3">
                {blog.title}
              </h3>

              {/* Explore Link */}
              <a
                href={blog.link}
                className="text-red-500 font-medium hover:underline mt-auto flex items-center gap-1"
              >
                Explore More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
