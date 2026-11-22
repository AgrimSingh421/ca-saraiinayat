
const facilities = [
  {
    number: "01",
    title: "Smart Classrooms",
    description:
      "Technology-supported learning environments designed to make lessons engaging and interactive.",
    icon: "▤",
  },
  {
    number: "02",
    title: "Science Laboratories",
    description:
      "Spaces where students can explore scientific concepts through practical experiments.",
    icon: "⚗",
  },
  {
    number: "03",
    title: "Computer Laboratory",
    description:
      "Opportunities to develop computer literacy and essential digital skills.",
    icon: "⌘",
  },
  {
    number: "04",
    title: "Library",
    description:
      "A welcoming space that encourages reading, curiosity and independent learning.",
    icon: "▥",
  },
  {
    number: "05",
    title: "Sports & Recreation",
    description:
      "Activities that encourage physical fitness, teamwork and sportsmanship.",
    icon: "⚽",
  },
  {
    number: "06",
    title: "Arts & Culture",
    description:
      "Opportunities for students to explore creativity and express themselves.",
    icon: "✳",
  },
];

export default function CampusFacilities() {
  return (
    <section className="bg-[#f8f6f1] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e87936]">
              Our Campus
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#142b45] sm:text-4xl lg:text-5xl">
              An Environment That
              <br />
              Inspires <span className="text-[#e87936]">Excellence.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#687582]">
            A supportive learning environment equipped with facilities that
            encourage students to explore, discover and grow.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.number}
              className="group relative overflow-hidden rounded-2xl border border-[#e6e2da] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#e87936]/40 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f8f1e9] text-2xl text-[#e87936] transition-colors group-hover:bg-[#e87936] group-hover:text-white">
                  {facility.icon}
                </div>

                <span className="text-sm font-semibold text-[#c8c8c8]">
                  {facility.number}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-[#142b45]">
                {facility.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687582]">
                {facility.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#e87936] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}