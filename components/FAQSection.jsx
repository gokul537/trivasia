// components/FAQSection.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import FAQ from "@/asset/faq.png";
import Image from 'next/image';

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    points: ['100% Graduation Assistance', 'Financial Support'],
  },
  {
    question: 'What is the consultation process like?',
    answer:
      'We follow a simple, transparent consultation process tailored to each individual’s needs.',
  },
  {
    question: 'What is your success rate with visa applications?',
    answer:
      'We boast a 95% success rate on visa applications, thanks to our expert guidance.',
  },
  {
    question: 'How do I get started with your services?',
    answer:
      'Just book a free consultation or contact us via our website to begin the process.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-16 gap-12 max-w-7xl mx-auto">
      {/* Left Image & Title */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h5 className="text-sm text-red-500 uppercase tracking-widest font-semibold">FAQ</h5>
        <h2 className="text-4xl font-bold text-gray-900">
          Common Questions <span className="text-red-600">Answered</span>
        </h2>
        <Image
          src={FAQ} // Replace with actual path
          alt="FAQ Illustration"
          className="w-full max-w-md mx-auto lg:mx-0 mt-8"
        />
      </div>

      {/* Right FAQs */}
      <div className="lg:w-1/2 w-full space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full px-6 py-4 bg-white text-left font-medium text-gray-900"
            >
              <span>{faq.question}</span>
              <span className="text-red-600">
                {openIndex === index ? <Minus /> : <Plus />}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-600 overflow-hidden"
                >
                  <p className="mb-2">{faq.answer}</p>
                  {faq.points && (
                    <ul className="space-y-1 text-sm font-medium">
                      {faq.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500">✔️</span> {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
