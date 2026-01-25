"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type GalleryContextValue = {
  images: GalleryImage[];
  openAt: (index: number) => void;
};

const GalleryContext = createContext<GalleryContextValue | null>(null);

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within GalleryProvider");
  }
  return context;
}

type GalleryProviderProps = {
  images: GalleryImage[];
  children: ReactNode;
};

export default function GalleryProvider({ images, children }: GalleryProviderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openAt = useCallback(
    (index: number) => {
      if (images.length === 0) return;
      const safeIndex = ((index % images.length) + images.length) % images.length;
      setActiveIndex(safeIndex);
    },
    [images.length]
  );

  const close = useCallback(() => setActiveIndex(null), []);

  const next = useCallback(() => {
    if (images.length === 0) return;
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );
  }, [images.length]);

  const previous = useCallback(() => {
    if (images.length === 0) return;
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, close, next, previous]);

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  const value = { images, openAt };

  const activeImage = activeIndex === null ? null : images[activeIndex];
  const currentIndex = activeIndex ?? 0;

  return (
    <GalleryContext.Provider value={value}>
      {children}
      {activeImage ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute inset-0 cursor-zoom-out"
            aria-label="Close gallery"
          />
          <div className="relative z-10 mx-auto w-[min(92vw,1100px)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
              <span>
                Image {currentIndex + 1} of {images.length}
              </span>
              <button
                type="button"
                onClick={close}
                className="text-white/70 transition hover:text-white"
                aria-label="Close gallery"
              >
                Close
              </button>
            </div>
            <div className="relative mt-4 h-[70vh] overflow-hidden rounded-[28px] border border-white/10 bg-black/60 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 70vw, 90vw"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-white/70">
              <p className="max-w-[70%]">{activeImage.caption ?? activeImage.alt}</p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-white/40"
                  aria-label="Previous image"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-white/40"
                  aria-label="Next image"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </GalleryContext.Provider>
  );
}
