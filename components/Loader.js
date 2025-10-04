'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Loader({ onFinish }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const confettiTimer = setTimeout(() => setShowConfetti(true), 1000); // 1 second delay
    const finishTimer = setTimeout(() => onFinish(), 6000); // 6 seconds
    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ transformOrigin: 'top' }}
    >
      {showConfetti && windowSize.width > 0 && (
        <Confetti width={windowSize.width} height={windowSize.height} recycle={false} />
      )}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-red-600 text-center"
      >
        🎉 Congratulations!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-4 text-xl md:text-3xl font-semibold text-gray-800 text-center"
      >
        Welcome to Trivasia
      </motion.p>
    </motion.div>
  );
}
