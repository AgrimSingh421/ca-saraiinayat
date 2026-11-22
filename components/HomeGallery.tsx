import Image from "next/image";
import Link from "next/link";
import { galleryPhotos } from "@/data/gallery";

export default function HomeGallery() {
  const photos = galleryPhotos.slice(0, 4);

  return (
    <section className="bg-[#f8f6f1] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e87936]">
              Our Memories
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#142b45] sm:text-4xl lg:text-5xl">
              Moments that
              <br />
              <span className="text-[#e87936]">matter.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#687582]">
              A glimpse into life at Central Academy, capturing the experiences,
              celebrations and everyday moments that make our school special.
            </p>
          </div>

          <Link
            href="/gallery"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-[#142b45]/20 px-6 py-3 text-sm font-bold text-[#142b45] transition-all hover:border-[#e87936] hover:bg-[#e87936] hover:text-white sm:inline-flex"
          >
            View Full Gallery <span>→</span>
          </Link>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <Link
              href="/gallery"
              key={photo.id}
              className={`group relative block overflow-hidden rounded-3xl bg-[#e9e5dc] ${
                index === 0
                  ? "sm:col-span-2 sm:row-span-2 min-h-[320px] sm:min-h-[500px]"
                  : "min-h-[240px] sm:min-h-[240px]"
              }`}
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                unoptimized
                sizes={
                  index === 0
                    ? "(max-width: 640px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, 25vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2037]/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#f5a45d]">
                  {photo.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {photo.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile gallery button */}
        <div className="mt-9 text-center sm:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-[#142b45] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#e87936]"
          >
            View Full Gallery <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
