import Link from "next/link";
import { schoolInfo } from "@/data/school";

export default function ContactSection() {
  return (
    <section className="bg-[#f8f6f1] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e87936]">
            Get in Touch
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#142b45] sm:text-4xl lg:text-5xl">
            We'd love to
            <br />
            <span className="text-[#e87936]">hear from you.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#687582]">
            Whether you are a parent, student or visitor, our school office is
            here to help with your questions and enquiries.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <div className="rounded-3xl bg-[#142b45] p-8 text-white sm:p-10">
            <h3 className="text-xl font-bold">School Office</h3>

            <div className="mt-9 space-y-7">
              {/* Address */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                  Address
                </p>

                <p className="mt-2 text-sm leading-7 text-white/75">
                  {schoolInfo.address}
                </p>
              </div>

              <div className="h-px bg-white/10" />

              {/* Phone */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                  Phone
                </p>

                <a
                  href={`tel:${schoolInfo.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-sm font-semibold text-white transition-colors hover:text-[#f5a45d]"
                >
                  {schoolInfo.phone}
                </a>
              </div>

              <div className="h-px bg-white/10" />

              {/* Email */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                  Email
                </p>

                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="mt-2 block break-all text-sm font-semibold text-white transition-colors hover:text-[#f5a45d]"
                >
                  {schoolInfo.email}
                </a>
              </div>

              <div className="h-px bg-white/10" />

              {/* Hours */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                  Office Hours
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {schoolInfo.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Map / visit card */}
          <div className="relative min-h-[480px] overflow-hidden rounded-3xl bg-[#e7e2d8]">
            {/* Decorative map-style background */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-[12%] top-[20%] h-px w-[80%] rotate-[18deg] bg-[#142b45]/20" />
              <div className="absolute left-[-10%] top-[55%] h-px w-[120%] -rotate-[12deg] bg-[#142b45]/20" />
              <div className="absolute left-[35%] top-[-10%] h-[120%] w-px rotate-[24deg] bg-[#142b45]/20" />
              <div className="absolute left-[70%] top-[-10%] h-[120%] w-px -rotate-[18deg] bg-[#142b45]/20" />

              <div className="absolute left-[20%] top-[35%] h-32 w-32 rounded-full border border-[#142b45]/20" />
              <div className="absolute right-[15%] bottom-[20%] h-48 w-48 rounded-full border border-[#142b45]/20" />
            </div>

            {/* Location marker */}
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e87936] text-2xl text-white shadow-xl">
                ●
              </div>

              <div className="mt-4 rounded-2xl bg-white px-5 py-4 text-center shadow-xl">
                <p className="text-sm font-bold text-[#142b45]">
                  Central Academy
                </p>

                <p className="mt-1 text-xs text-[#687582]">
                  Sarai Inayat, Prayagraj
                </p>
              </div>
            </div>

            {/* Bottom buttons */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-[#142b45]/90 to-transparent p-6 pt-24 sm:flex-row">
              <a
                href={schoolInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-full bg-[#e87936] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#f08a49]"
              >
                Get Directions →
              </a>

              <Link
                href="/contact"
                className="flex flex-1 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
