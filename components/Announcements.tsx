import Link from "next/link";
import { announcements } from "../data/announcements";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function Announcements() {
  const sortedAnnouncements = [...announcements].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  const featured = sortedAnnouncements[0];
  const recent = sortedAnnouncements.slice(1, 4);

  if (!featured) return null;

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e87936]">
              Stay Updated
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#142b45] sm:text-4xl lg:text-5xl">
              News & <span className="text-[#e87936]">Announcements.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#687582]">
              Stay informed about the latest happenings, important notices and
              updates from Central Academy.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Featured announcement */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#142b45] p-8 text-white sm:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#e87936] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Latest Update
                </span>

                {featured.important && (
                  <span className="text-xs font-semibold text-orange-200">
                    Important
                  </span>
                )}
              </div>

              <p className="mt-8 text-sm font-medium text-white/60">
                {formatDate(featured.date)}
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
                {featured.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                {featured.description}
              </p>
            </div>

            {featured.link && (
              <Link
                href={featured.link}
                className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#f5a45d] transition-colors hover:text-white"
              >
                Read Full Notice <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>

          {/* Recent announcements */}
          <div className="flex flex-col divide-y divide-[#e6e2da] rounded-3xl border border-[#e6e2da] px-6 sm:px-8">
            {recent.length > 0 ? (
              recent.map((item) => (
                <article key={item.id} className="py-6 first:pt-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e87936]">
                      {item.category}
                    </span>

                    {item.important && (
                      <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold text-[#c45c24]">
                        IMPORTANT
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-[#142b45]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687582]">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-[#929ba2]">
                      {formatDate(item.date)}
                    </span>

                    {item.link && (
                      <Link
                        href={item.link}
                        className="text-xs font-bold text-[#e87936] hover:text-[#142b45]"
                      >
                        View Details →
                      </Link>
                    )}
                  </div>
                </article>
              ))
            ) : (
              <p className="py-8 text-sm text-[#687582]">
                No other announcements at the moment.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
