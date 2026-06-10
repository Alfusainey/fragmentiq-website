import Image from "next/image";

export function FragmentedKnowledge() {
  return (
    <section className="bg-neutral-700 text-white">
      <div className="mx-auto max-w-screen-2xl px-5 py-12 sm:px-8 sm:py-20 md:py-28 lg:py-32">
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
          {/* Header - Section label and headline */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm font-medium tracking-wide text-neutral-300 sm:text-base">
              Fragmented Knowledge
            </p>
            
            <h2 className="text-center text-[2rem] leading-[1.15] font-medium sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl text-balance max-w-7xl">
              How recurring code fragments become operational blind spots
            </h2>
          </div>

          {/* Large centered diagram */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <Image
                src="/2-vulnerability-detect-small.png"
                alt="Diagram showing a vulnerability detected in GitHub Repository while other instances in Stack Overflow, Bitbucket, and GitLab remain unaware with fix not propagated"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Supporting explanatory text below the image */}
          {/* removed max-w-3xl  from div className */}
          <div className="space-y-8 sm:space-y-10">
            <p className="text-base leading-relaxed text-neutral-300 sm:text-xl sm:leading-loose md:text-xl md:leading-relaxed">
              In 2007, a vulnerability in a shared code fragment was discovered, assigned a CVE, and patched in the MIT Kerberos project.

Years later, researchers found that a similar fragment — copied into the FreeBSD open-source project — still contained the vulnerable logic. The original fix never propagated across the related code fragments.

In 2026, Claude Mythos rediscovered and fixed the vulnerability in FreeBSD, nearly two decades after the issue had already been identified and patched in MIT Kerberos.

            </p>

            <p className="text-base leading-relaxed text-neutral-300 sm:text-xl sm:leading-loose md:text-xl md:leading-relaxed">
              The projects were not directly connected through package dependencies or traditional software supply chain tooling. What connected them was something much harder to track: recurring code fragments reused across ecosystems over time.
              For nearly two decades, the vulnerability knowledge remained isolated to one codebase while related fragments elsewhere silently evolved independently.

            </p>
            <p className="text-base leading-relaxed text-neutral-300 sm:text-xl sm:leading-loose md:text-xl md:leading-relaxed">
            We also found similar <b>disconnected vulnerability knowledge</b> between Stack Overflow and open-source projects.
            A vulnerable code fragment from Stack Overflow later appeared in the Apache Solr and Apache Chemistry projects. 
            Although the vulnerability was eventually fixed on Stack Overflow, the maintainers of the Apache projects had no knowledge about the fix associated with the related fragment on Stack Overflow.
            </p>

          <p className="border-l-4 border-white pl-5 text-2xl font-medium leading-snug text-white md:text-3xl">
              This is the operational blind spot of distributed code reuse
          </p>
            <p className="text-base leading-relaxed text-neutral-300 sm:text-xl sm:leading-loose md:text-xl md:leading-relaxed">
              Security fixes often remain local, while semantically related fragments continue evolving independently across open-source projects, documentation, internal systems, and AI-generated code. 

            </p>
            <p className="text-base leading-relaxed text-neutral-300 sm:text-xl sm:leading-loose md:text-xl md:leading-relaxed">
              Security vulnerabilities are only one example of intelligence that can become disconnected across semantically related code fragments.
              API deprecations, performance improvements, licensing risks, reliability fixes, and bug-related discussions across issue trackers, 
              patch reviews, and developer forums are also intelligence that may become disconnected across related code fragments.
              
            </p>

            {/*<ul className="space-y-4 text-base leading-relaxed text-neutral-200 sm:space-y-5 sm:text-lg md:text-xl">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 sm:mt-2.5 sm:h-2 sm:w-2" />
                <span>Related code fragments evolve independently across projects</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 sm:mt-2.5 sm:h-2 sm:w-2" />
                <span>Critical fixes remain isolated to local repositories and forums</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 sm:mt-2.5 sm:h-2 sm:w-2" />
                <span>Existing tooling lacks visibility into distributed fragment reuse</span>
              </li>
            </ul>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
