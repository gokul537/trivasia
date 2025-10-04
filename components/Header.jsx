'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/asset/logo.png";
import ModalForm from './ModalForm';

const navLinks = ['Home', 'About Us', 'Services', 'Testimonials', 'Blog', 'Contact Us'];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
 const [open, setOpen] = useState(false);
  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      let current = 'Home';
      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase().replace(/\s+/g, '-'));
        if (section) {
          const sectionTop = section.offsetTop - 120; // header height offset
          if (window.scrollY >= sectionTop) {
            current = link;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-[#fff8f3] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Travisia Logo" width={120} height={40} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              whileHover={{ scale: 1.05, color: '#d32f2f' }}
              className={`relative ${activeSection === link ? 'text-red-600' : ''}`}
            >
              {link}
              {activeSection === link && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-600"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Call Info and Button */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-red-700 font-semibold">
            <PhoneCall className="w-5 h-5" />
            <span>+91 8098558877</span>
          </div>
          <button onClick={() => setOpen(true)} className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-full text-sm font-semibold">
            Need Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6 text-red-600" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="md:hidden bg-white overflow-hidden shadow-lg"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-gray-800 hover:text-red-600 transition ${
                  activeSection === link ? 'text-red-600 font-bold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-4">
              <div className="text-red-700 font-medium flex items-center space-x-2">
                <PhoneCall className="w-5 h-5" />
                <span>+91 8098558877</span>
              </div>
              <button onClick={() => setOpen(true)} className="mt-4 bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 w-full rounded-full text-sm font-semibold">
                Need Consultation
              </button>
            </div>
          </div>
        </motion.div>
      )}
      <ModalForm open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
