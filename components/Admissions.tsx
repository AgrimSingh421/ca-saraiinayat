import Link from "next/link";

export default function Admissions() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#142b45]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left content */}
            <div className="px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5a45d]">
                Admissions & Enquiries
              </span>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Begin your child's
                <br />
                <span className="text-[#f5a45d]">journey with us.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
                Choosing the right school is an important decision. Get in touch
                with Central Academy to learn more about our school, academic
                programmes and the admission process.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-[#e87936] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#f08a49]"
                >
                  Admission Information
                  <span>→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  Contact School
                </Link>
              </div>
            </div>

            {/* Right information card */}
            <div className="relative flex items-center border-t border-white/10 bg-[#0c2037] px-8 py-10 sm:px-12 lg:border-l lg:border-t-0 lg:px-12">
              <div className="w-full">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e87936]" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                    School Information
                  </span>
                </div>

                <div className="mt-8 space-y-7">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                      Classes
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">
                      Nursery to XII
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                      Academic Session
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">
                      2026 – 27
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                      Enquiries
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">
                      Contact the School Office
                    </p>
                  </div>
                </div>

                <div className="mt-9 rounded-2xl border border-[#e87936]/30 bg-[#e87936]/10 p-5">
                  <p className="text-sm leading-6 text-white/70">
                    For admission-related enquiries, please contact the school
                    office for the latest information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
