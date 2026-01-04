'use client';
import Image from "next/image";
import Link from "next/link";
import { Calendar, PenTool } from "lucide-react";
import { useEffect, useState, use } from "react";

export default function BlogDetailClient({ params }) {
  // Unwrap params properly using React.use
  const { id } = use(params); // ✅ Fixes the warning

  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sample blog data for fallback
    const sampleBlogs = {
      1: {
        id: 1,
        title: "Top Study Destinations for Indian Students in 2026",
        author: "Trivasia Team",
        created_at: "2025-12-15",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        content: `
          Choosing the right study destination is crucial for your academic and career success. Here are the top destinations for Indian students in 2026:

          1. United States
          The USA remains a top choice with world-class universities like MIT, Stanford, and Harvard. The country offers diverse programs, research opportunities, and excellent post-study work options.

          2. United Kingdom
          With prestigious institutions like Oxford, Cambridge, and Imperial College London, the UK offers quality education and a multicultural environment. The new Graduate Route allows students to stay for 2 years after graduation.

          3. Canada
          Canada is known for its welcoming immigration policies and high-quality education. Universities like University of Toronto and UBC offer excellent programs with affordable tuition compared to the US and UK.

          4. Australia
          Australian universities are globally recognized, and the country offers a great lifestyle with beautiful weather. The post-study work visa makes it attractive for Indian students.

          5. Germany
          Germany offers tuition-free education at public universities and excellent engineering programs. It's becoming increasingly popular among Indian students.

          Contact Trivasia Overseas for personalized guidance on choosing the right destination for your educational goals.
        `,
        category: "Study Abroad"
      },
      2: {
        id: 2,
        title: "Complete Guide to Student Visa Applications",
        author: "Trivasia Team",
        created_at: "2025-12-10",
        image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800",
        content: `
          Applying for a student visa can be overwhelming, but with proper preparation, you can navigate the process smoothly. Here's your complete guide:

          Step 1: Get Your Admission Letter
          First, secure admission from a recognized institution in your chosen country. This is essential for starting your visa application.

          Step 2: Gather Required Documents
          - Valid passport
          - Admission letter
          - Financial proof
          - Academic transcripts
          - English proficiency test scores (IELTS/TOEFL)
          - Statement of Purpose
          - Letters of Recommendation

          Step 3: Show Proof of Finances
          You need to demonstrate that you can cover tuition fees and living expenses. This can be through bank statements, scholarship letters, or sponsorship documents.

          Step 4: Schedule Your Visa Interview
          Book your visa appointment well in advance. Prepare to answer questions about your study plans, career goals, and ties to your home country.

          Step 5: Attend the Interview
          Be honest, confident, and well-prepared. Dress professionally and bring all required documents.

          Trivasia Overseas provides end-to-end visa assistance to ensure your application is strong and complete.
        `,
        category: "Education"
      },
      3: {
        id: 3,
        title: "Best Holiday Packages for Families",
        author: "Trivasia Team",
        created_at: "2025-12-05",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
        content: `
          Planning a family vacation? Here are our top-rated holiday packages designed for memorable family experiences:

          1. Europe Family Tour
          Explore the best of Europe with visits to Paris, Switzerland, and Italy. Kid-friendly activities, comfortable accommodations, and guided tours make this perfect for families.

          2. Southeast Asia Adventure
          Discover Thailand, Singapore, and Malaysia. Enjoy beautiful beaches, theme parks, and cultural experiences suitable for all ages.

          3. Dubai Extravaganza
          Experience luxury and adventure in Dubai. Visit Burj Khalifa, enjoy desert safaris, and explore world-class shopping malls and water parks.

          4. Bali Paradise
          Relax on pristine beaches, visit ancient temples, and enjoy water sports. Bali offers something for every family member.

          5. Australia & New Zealand
          Experience wildlife, stunning landscapes, and adventure activities. Perfect for families who love nature and outdoor activities.

          All our packages include:
          - Family-friendly accommodations
          - Meals and transportation
          - Experienced tour guides
          - Travel insurance
          - 24/7 support

          Contact Trivasia to customize your perfect family holiday!
        `,
        category: "Travel"
      }
    };

    const blogId = parseInt(id);
    
    // Try to fetch from API first
    fetch(`https://api.trivasia.com/api/blogs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('API not available');
        return res.json();
      })
      .then(data => {
        // Handle both response formats: direct object or nested under 'blog'
        setBlog(data.blog || data);
        setLoading(false);
      })
      .catch(err => {
        console.warn('Blog API not available, using sample data:', err.message);
        // Use sample data as fallback
        if (sampleBlogs[blogId]) {
          setBlog(sampleBlogs[blogId]);
          setLoading(false);
          setError(null);
        } else {
          // If blog ID not in samples, use first sample blog
          setBlog(sampleBlogs[1]);
          setLoading(false);
          setError(null);
        }
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">Error: {error}</p>
          <Link href="/blogs" className="text-red-600 hover:underline">← Back to Blogs</Link>
        </div>
      </div>
    );
  }

  if (!blog?.title) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">Blog not found</p>
          <Link href="/blogs" className="text-red-600 hover:underline">← Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto p-6 md:p-10 min-h-screen">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/blogs" className="text-gray-500 hover:text-red-600">Blogs</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900">{blog.title}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{blog.title}</h1>
      
      <div className="flex items-center gap-4 text-gray-500 mb-6 text-sm md:text-base">
        <span className="flex items-center gap-1">
          <PenTool className="w-4 h-4 text-red-500" />
          By {blog.author || 'Trivasia Team'}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4 text-red-500" />
          {new Date(blog.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
      </div>

      {blog.image && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
          <Image
            src={blog.image.startsWith("http") ? blog.image : `https://api.trivasia.com${blog.image}`}
            alt={blog.title}
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>
      )}

      <div className="prose prose-lg md:prose-xl max-w-full text-gray-800 leading-relaxed">
        {blog.content && blog.content.split('\n').map((paragraph, index) => {
          if (paragraph.trim()) {
            return <p key={index} className="mb-4">{paragraph.trim()}</p>;
          }
          return null;
        })}
      </div>

      {/* Share Section */}
      <div className="mt-12 pt-8 border-t">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-red-600 hover:underline font-semibold"
        >
          ← Back to All Blogs
        </Link>
      </div>
    </article>
  );
}
