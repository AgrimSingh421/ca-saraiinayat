"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryPhotos, galleryVideos } from "@/data/gallery";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(galleryPhotos.map((photo) => photo.category))),
  ];

  const filteredPhotos =
    activeCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === activeCategory);

  const closeViewer = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const showNext = useCallback(() => {
    setSelectedPhoto((current) =>
      current === null ? null : (current + 1) % filteredPhotos.length,
    );
  }, [filteredPhotos.length]);

  const showPrevious = useCallback(() => {
    setSelectedPhoto((current) =>
      current === null
        ? null
        : (current - 1 + filteredPhotos.length) % filteredPhotos.length,
    );
  }, [filteredPhotos.length]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedPhoto === null) return;

      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto, closeViewer, showNext, showPrevious]);

  useEffect(() => {
    if (selectedPhoto !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  const currentPhoto =
    selectedPhoto !== null ? filteredPhotos[selectedPhoto] : null;

  return (
    <main className="min-h-screen bg-[#f8f6f1]">
      {/* Page heading */}
      <section className="bg-[#142b45] px-6 pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Home <span className="mx-2">/</span> Gallery
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.2em] text-[#f5a45d]">
            Our Memories
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Life at Central Academy.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
            Explore the moments, experiences and celebrations that make our
            school community special.
          </p>
        </div>
      </section>

      {/* Gallery content */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-3 border-b border-[#e6e2da] pb-6">
          <button
            onClick={() => {
              setActiveTab("photos");
              setSelectedPhoto(null);
            }}
            className={`rounded-full px-7 py-3 text-sm font-bold transition-all ${
              activeTab === "photos"
                ? "bg-[#142b45] text-white"
                : "bg-white text-[#687582] hover:bg-[#eeeae1]"
            }`}
          >
            Photos ({galleryPhotos.length})
          </button>

          <button
            onClick={() => {
              setActiveTab("videos");
              setSelectedPhoto(null);
            }}
            className={`rounded-full px-7 py-3 text-sm font-bold transition-all ${
              activeTab === "videos"
                ? "bg-[#142b45] text-white"
                : "bg-white text-[#687582] hover:bg-[#eeeae1]"
            }`}
          >
            Videos ({galleryVideos.length})
          </button>
        </div>

        {/* Photos */}
        {activeTab === "photos" && (
          <div className="pt-9">
            {/* Category filters */}
            <div className="mb-9 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedPhoto(null);
                  }}
                  className={`rounded-full border px-5 py-2.5 text-xs font-bold transition-all ${
                    activeCategory === category
                      ? "border-[#e87936] bg-[#e87936] text-white"
                      : "border-[#e6e2da] bg-white text-[#687582] hover:border-[#142b45] hover:text-[#142b45]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Photo grid */}
            {filteredPhotos.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPhotos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => setSelectedPhoto(index)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e9e5dc] text-left"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c2037]/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#f5a45d]">
                        {photo.category}
                      </span>

                      <h3 className="mt-2 text-lg font-bold text-white">
                        {photo.title}
                      </h3>
                    </div>

                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                      <span className="text-xl">↗</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="py-16 text-center text-[#687582]">
                No photographs available in this category yet.
              </p>
            )}
          </div>
        )}

        {/* Videos */}
        {activeTab === "videos" && (
          <div className="flex min-h-[350px] flex-col items-center justify-center py-16 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-[#e87936]">
              ▶
            </div>

            <h2 className="mt-7 text-2xl font-bold text-[#142b45]">
              Videos coming soon
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-[#687582]">
              We're preparing videos of school events, activities and memorable
              moments. Check back soon!
            </p>
          </div>
        )}
      </section>

      {/* Full-screen photo viewer */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071321]/95 p-4 sm:p-8"
          onClick={closeViewer}
        >
          <button
            onClick={closeViewer}
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
          >
            ×
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:left-7"
          >
            ‹
          </button>

          <div
            className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[75vh] w-full">
              <Image
                src={currentPhoto.image}
                alt={currentPhoto.title}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-lg font-bold text-white">
                {currentPhoto.title}
              </h3>

              <p className="mt-1 text-sm text-white/50">
                {currentPhoto.category} · {selectedPhoto! + 1} of{" "}
                {filteredPhotos.length}
              </p>
            </div>
          </div>

          <button
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:right-7"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
