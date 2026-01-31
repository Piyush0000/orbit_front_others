"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const announcements = [
  "Free Shipping on Orders Over $50 🚚",
  "Safe & Non-Toxic Materials 🌱",
  "Easy 30-Day Returns ↩️",
  "Perfect Gifts for Every Age 🎁",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % announcements.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + announcements.length) % announcements.length);

  return (
    <div className="bg-primary text-white text-sm font-medium py-2 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="p-1 hover:bg-white/20 rounded-full transition-colors hidden sm:block"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex-1 text-center truncate px-4 animate-in fade-in slide-in-from-bottom-2 duration-300 key={current}">
          {announcements[current]}
        </div>
        <button
          onClick={next}
          className="p-1 hover:bg-white/20 rounded-full transition-colors hidden sm:block"
          aria-label="Next announcement"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
