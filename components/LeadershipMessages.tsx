const leaders = [
  {
    name: "Dr. Sangam Mishra",
    post: "Chairman, Central Academy Organisation",
    postShort: "Chairman",
    image: "/images/chairman.jpg",
    message:
      "As Chairman and founding Member of Central Academy Educational Society, I am delighted to welcome you to the web site of this dynamic institution. We have always placed a great emphasis on the quality of teaching and learning along with the use of highly innovative teaching and delivery methods. While academic progress is clearly the main purpose of the school, we also encourage all our pupils to develop a wide range of additional interests, so that we provide a very rounded and complete education.",
  },
  {
    name: "Mr. S.K. Tiwari",
    post: "Director, Central Academy, Prayagraj",
    postShort: "Director",
    image: "/images/director.png",
    message:
      "It gives me immense pleasure that Central Academy Organization has added one more feather in its cap by taking over beautiful school building at Sarai Inayat, Prayagraj. It is a proud moment for Management & Staff Members of Central Academy Organization. School is affiliated to CBSE, Delhi. I am very much pleased to welcome you all through the website of Central Academy, Sarai Inayat, Prayagraj. Central Academy has been imparting quality education to the students at a very reasonable fee structure since its inception. Eco-friendly atmosphere of the school will surely attract the students mind towards studies.",
  },
  {
    name: "Ms. Richa Tripathi",
    post: "Principal, Central Academy, Sarai Inayat",
    postShort: "Principal",
    image: "/images/principal.jpg",
    message:
      "Guided by the epochal vision of our Chairman Dr. Sangam Mishra and under the progressive patronage of our Director Mr. Suresh Kumar Tiwari, Central Academy Sarai Inayat has become a launchpad for innovative ideas and an 'avant grade' enterprise where education is concerned. It is our mission to ensure the physical, social and spiritual development of each child. This will be achieved by nurturing logical, scientific temperament, ability to explore, research and innovation. The unique blend of values and tradition with the technology and most advanced pedagogy strengthens the foundation of learning and growing. In the true spirit of \"Vidya Dadati Vinayam\", all our children will grow illustriously with a loving and humble heart that feels and cares for the whole world.",
  },
];

export default function LeadershipMessages() {
  return (
    <section className="bg-[#f8f6f1] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e87936]">
            Words of Guidance
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#142b45] sm:text-4xl lg:text-5xl">
            A message from our
            <br />
            <span className="text-[#e87936]">leadership.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#687582]">
            A shared vision, a commitment to excellence and a belief in every
            student's potential.
          </p>
        </div>

        <div className="space-y-8">
          {leaders.map((leader, index) => (
            <article
              key={leader.post}
              className="grid overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-[340px_1fr] lg:grid-cols-[400px_1fr]"
            >
              {/* Leader's photograph */}
              <div className="relative min-h-[320px] bg-[#e9e5dc] md:min-h-[430px]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#e87936]">
                  {leader.postShort}'s Message
                </span>

                <h3 className="mt-4 text-2xl font-bold text-[#142b45] sm:text-3xl">
                  {leader.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#687582]">
                  {leader.post}
                </p>

                <div className="my-6 h-1 w-14 rounded-full bg-[#e87936]" />

                <p className="text-base leading-8 text-[#687582]">
                  {leader.message}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
