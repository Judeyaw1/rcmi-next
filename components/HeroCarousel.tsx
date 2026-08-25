"use client";

import { useEffect, useState } from "react";

const AUTO_ADVANCE_MS = 6000;

export default function HeroCarousel({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  function go(dir: -1 | 1) {
    setActive((prev) => (prev + dir + images.length) % images.length);
  }

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [active, images.length]);

  return (
    <>
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,7,20,0.88) 0%, rgba(4,7,20,0.42) 30%, rgba(4,7,20,0) 52%), linear-gradient(0deg, rgba(4,7,20,0.5) 0%, rgba(4,7,20,0) 28%)",
        }}
      />

      <div className="absolute bottom-10 left-6 z-3 flex gap-2 md:left-10">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-0.5 w-5.5 ${i === active ? "bg-crimson" : "bg-white/35"}`}
          />
        ))}
      </div>
      <div className="absolute bottom-10 right-6 z-3 flex gap-2.5 md:right-10">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-black/20 text-lg text-white/92 backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => go(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-black/20 text-lg text-white/92 backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          ›
        </button>
      </div>
    </>
  );
}
