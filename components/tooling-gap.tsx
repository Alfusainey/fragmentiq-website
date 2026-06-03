import Image from "next/image";

export function ToolingGap() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-2xl px-5 py-12 sm:px-8 sm:py-24 md:py-32 lg:py-40">
        <div className="flex flex-col-reverse gap-10 sm:gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left image */}
          <div className="lg:flex-[0.85]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qoPIS7ZrK21XxmH2f78nXsyRgyyQwU.png"
                alt="Team collaborating on software development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="lg:flex-[1.2] space-y-6 sm:space-y-10">
            <p className="text-sm font-medium tracking-wide text-muted-foreground sm:text-base">
              Infrastructure Blind Spots
            </p>
            
            <h2 className="text-[2rem] leading-[1.15] font-medium text-foreground text-balance sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
              Existing software supply chain tools were not designed for distributed code fragments
            </h2>
            
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl sm:leading-loose md:text-2xl md:leading-relaxed">
              SBOMs, dependency scanners, and package managers track explicitly declared dependencies. But recurring code fragments evolve outside those systems — across repositories, forums, internal projects, and AI-generated code.
            </p>
            
            <ul className="space-y-4 text-base leading-relaxed text-foreground sm:space-y-5 sm:text-lg md:text-xl">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground sm:mt-2.5 sm:h-2 sm:w-2" />
                <span>Dependency graphs ignore recurring code fragments</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground sm:mt-2.5 sm:h-2 sm:w-2" />
                <span>Security fixes discovered in one occurrence rarely propagate elsewhere</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground sm:mt-2.5 sm:h-2 sm:w-2" />
                <span>Existing tooling lacks visibility into distributed fragment evolution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
