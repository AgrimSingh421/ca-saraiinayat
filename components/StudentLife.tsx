const activities = [
  {
    number: "01",
    title: "Sports & Athletics",
    description:
      "Building teamwork, discipline and confidence through physical activities and sports.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=85",
    className: "md:col-span-2",
  },
  {
    number: "02",
    title: "Arts & Culture",
    description:
      "Encouraging students to discover their talents through music, dance and performances.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=900&q=85",
    className: "",
  },
  {
    number: "03",
    title: "Celebrations",
    description:
      "Creating memorable experiences through festivals, special days and school events.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=85",
    className: "",
  },
  {
    number: "04",
    title: "Creative Expression",
    description:
      "Providing opportunities for imagination, creativity and individual expression.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=85",
    className: "md:col-span-2",
  },
];

export default function StudentLife() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e87936]">
            Beyond Academics
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#142b45] sm:text-4xl lg:text-5xl">
            Learning doesn't end
            <br />
            <span className="text-[#e87936]">in the classroom.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#687582]">
            Every experience helps shape a student's personality. We believe in
            encouraging creativity, teamwork, confidence and all-round
            development.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {activities.map((activity) => (
            <div
              key={activity.number}
              className={`group relative min-h-[300px] overflow-hidden rounded-3xl ${activity.className}`}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2037]/95 via-[#0c2037]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <span className="text-sm font-semibold tracking-widest text-[#f5a45d]">
                  {activity.number}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {activity.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
