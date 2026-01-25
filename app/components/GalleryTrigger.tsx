"use client";

import type { ReactNode } from "react";
import { useGallery } from "./GalleryProvider";

type GalleryTriggerProps = {
  index: number;
  alt: string;
  className?: string;
  children: ReactNode;
};

export default function GalleryTrigger({
  index,
  alt,
  className = "",
  children,
}: GalleryTriggerProps) {
  const { openAt } = useGallery();

  return (
    <button
      type="button"
      onClick={() => openAt(index)}
      aria-label={`Open image: ${alt}`}
      className={`group relative block h-full w-full cursor-zoom-in appearance-none border-0 bg-transparent p-0 text-left ${className}`}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/0 transition group-hover:ring-white/20" />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
    </button>
  );
}
