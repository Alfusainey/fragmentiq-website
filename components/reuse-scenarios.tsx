import Image from "next/image";
import { ChevronRight } from "lucide-react";

const useCases = [
  {
    category: "Audit",
    title: "Internal Project Copying",
    description: "Trace code back to its source and timestamp",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    category: "Enforce",
    title: "AI-Generated Code Integration",
    description: "Block snippets from untrusted sources automatically",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    category: "Monitor",
    title: "Stack Overflow reuse",
    description: "Know when upstream code changes or vulnerabilities emerge",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
];

export function ReuseScenarios() {
  return (
    <section className="bg-background px-5 py-12 sm:px-8 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-16 md:mb-20">
          <span className="text-sm font-medium tracking-wide text-muted-foreground sm:text-base">
            Purpose
          </span>
          <h2 className="text-[1.75rem] leading-[1.2] font-serif font-medium text-balance sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Real-World Reuse Scenarios
          </h2>
          <p className="text-base text-muted-foreground sm:text-xl md:text-2xl lg:text-2xl">
            Track where code actually comes from
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 lg:gap-12">
          {useCases.map((useCase, index) => (
            <article
              key={index}
              className="flex flex-col rounded-2xl border border-foreground/15 sm:border-border bg-background overflow-hidden"
            >
              {/* Card content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 sm:space-y-6 flex-1">
                <span className="text-sm font-medium text-muted-foreground sm:text-base">
                  {useCase.category}
                </span>
                <h3 className="text-xl font-medium leading-snug sm:text-2xl md:text-3xl lg:text-4xl">
                  {useCase.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed sm:text-lg md:text-xl lg:text-xl">
                  {useCase.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:opacity-70 transition-opacity sm:text-lg"
                >
                  Explore
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>

              {/* Card image */}
              <div className="relative aspect-[5/3] sm:aspect-[4/3] overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
