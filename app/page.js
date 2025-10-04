'use client'; // <-- Add this line at the very top

import Loader from "@/components/Loader";
import Home from "@/page/Home";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader onFinish={() => setLoading(false)} />;

  return (
    <>
      <Home />
    </>
  );
}
