import Image from "next/image";

export function ResearchEvidence() {
  const stats = [
    {
      value: "87%",
      title: "Of developers paste code regularly",
      description: "From Stack Overflow, GitHub, or AI assistants without tracking",
    },
    {
      value: "0%",
      title: "Visibility in standard SBOMs",
      description: "Field study insights",
    },
    {
      value: "5x",
      title: "Average snippet duplication rate",
      description: "Selected findings, ecosystem observations",
    },
  ];

  return (
    <section className="bg-neutral-950 text-white px-5 py-12 sm:px-8 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-screen-2xl space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="space-y-5 sm:space-y-6 max-w-3xl">
          <span className="text-sm font-medium tracking-wide text-neutral-400 sm:text-base">
            Evidence
          </span>
          <h2 className="text-[1.75rem] leading-[1.2] font-medium text-balance sm:text-3xl sm:leading-tight md:text-4xl lg:text-5xl">
            Research insights into fragmented code evolution
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg md:text-xl md:leading-relaxed">
            Empirical studies show that recurring code fragments are widely distributed across software ecosystems. Yet existing tooling provides little visibility into how those fragments evolve, diverge, and propagate across projects and platforms.
          </p>
        </div>

        {/* Content: Image + Stats */}
        <div className="flex flex-col gap-12 sm:gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left image */}
          <div className="lg:flex-1">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dUONdQYTtq1Fo9iZHWMSi7PemUBkii.png"
                alt="Developer working on tablet in a casual setting"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right stats */}
          <div className="lg:flex-1 flex flex-col justify-center space-y-10 sm:space-y-10 lg:space-y-12">
            {stats.map((stat, index) => (
              <div key={index} className="border-l-2 border-neutral-600 pl-5 sm:pl-0 sm:border-l-0 space-y-2 sm:space-y-2">
                <span className="block text-[2.5rem] font-medium tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-7xl">
                  {stat.value}
                </span>
                <h3 className="text-lg font-medium pt-1 sm:pt-0 sm:text-lg md:text-xl">
                  {stat.title}
                </h3>
                <p className="text-base text-neutral-400 leading-relaxed sm:text-base md:text-lg">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
