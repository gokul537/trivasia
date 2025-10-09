import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import Footer from "@/asset/footer.png";
import Image from "next/image";
import Logo from "@/asset/logo.png";

export default function FooterSection() {
  return (
    <div className="relative" >
      {/* Top Banner */}
      <div className="bg-white rounded-xl relative shadow-md p-6 z-10 md:p-0 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto mt-8">
        <div className="flex-shrink-0">
          <Image
            src={Footer}
            alt="Travel"
            className="w-56 md:w-64"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Create Unforgettable <br />
            <span className="text-red-500">Moments with Us</span>
          </h2>
          <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg">
            Enquire Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-50 border-t border-gray-200 pt-12 pb-6 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto text-center md:text-left">
          {/* Company Info */}
          <div>
            <Image src={Logo} alt="Trivasia" className="w-28 mb-4 mx-auto md:mx-0" />
            <p className="text-gray-600 text-sm mb-3">
              Do you have questions or want more information? Contact us now
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4 text-red-500" /> +91 9629557788
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2 text-gray-700 mt-1">
              <Mail className="w-4 h-4 text-red-500" /> admission@trivasia.com
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-red-500 mb-3">Locations</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Karur (Head Office)</li>
              <li>Trichy</li>
              <li>Coimbatore</li>
              <li>Kumbakonam</li>
              <li>Madurai</li>
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-bold text-red-500 mb-3">Explore Link</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-red-500 mb-3">Services</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Study Abroad</li>
              <li>Holiday Package</li>
              <li>Immigration</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-red-500 mb-3">We are in</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
          © 2025 Trivasia Tours & Travels Private Limited. All Rights Reserved.{" "}
          <span className="block md:inline">
            Developed By{" "}
            <a href="#" className="font-medium text-gray-700 hover:text-red-500">
              Leadup Technologies
            </a>
          </span>
        </div>
      </footer>

    </div>
  );
}
