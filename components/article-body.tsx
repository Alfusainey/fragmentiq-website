import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon, Linkedin, Facebook } from "lucide-react";

// X (Twitter) icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface ArticleBodyProps {
  tags?: string[];
  author?: {
    name: string;
    role?: string;
    avatarUrl?: string;
  };
}

export function ArticleBody({ 
  tags = ["AI code", "Dependencies", "Code tracking", "Security"],
  author = {
    name: "Ernest Hemingway",
    role: "Founder, Hidden Snippet Dependency Tracking"
  }
}: ArticleBodyProps) {
  return (
    <section className="bg-neutral-700 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Breadcrumb + Social row */}
        <div className="flex items-center justify-between mb-12">
          <nav className="flex items-center gap-2 text-sm text-neutral-300">
            <Link href="/" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span className="text-neutral-500">›</span>
            <span>Technology</span>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="text-neutral-300 hover:text-white transition-colors">
              <LinkIcon className="w-5 h-5" />
            </button>
            <button className="text-neutral-300 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="text-neutral-300 hover:text-white transition-colors">
              <XIcon className="w-5 h-5" />
            </button>
            <button className="text-neutral-300 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Introduction Section */}
        <article className="space-y-8">
          <h2 className="text-3xl font-serif font-medium md:text-4xl">
            Introduction
          </h2>
          
          <p className="text-neutral-300 leading-relaxed text-lg">
            When developers copy code from Stack Overflow, fork repositories, or accept AI-generated suggestions, they rarely consider the downstream implications. Each fragment carries its own lineage — a history of fixes, vulnerabilities, and contextual assumptions that may no longer apply in its new environment.
          </p>
          
          <p className="text-neutral-300 leading-relaxed text-lg">
            The challenge intensifies as AI code assistants accelerate fragment propagation. A single vulnerable pattern suggested by an AI model can replicate across thousands of codebases within weeks. Traditional dependency tracking tools, designed for package-level visibility, remain blind to these distributed code fragments evolving independently across the software ecosystem.
          </p>

          {/* Image Block */}
          <figure className="my-12">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v10h16V7H4zm8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  <path d="M4 15l4-4 2 2 4-4 6 6H4z"/>
                </svg>
              </div>
            </div>
            <figcaption className="mt-4 text-sm text-neutral-400 border-l-2 border-neutral-500 pl-4">
              Image caption goes here
            </figcaption>
          </figure>

          {/* Highlighted Section */}
          <h3 className="text-2xl font-serif font-medium md:text-3xl leading-snug">
            Code fragments propagate faster than security patches. When a vulnerability is discovered in one occurrence, related fragments across forums, repositories, and AI training data remain exposed.
          </h3>
          
          <p className="text-neutral-300 leading-relaxed text-lg">
            Software supply chain security has traditionally focused on declared dependencies — the packages explicitly listed in manifests and lock files. But recurring code fragments operate outside these boundaries. They spread through copy-paste workflows, AI suggestions, tutorial examples, and internal code sharing, creating invisible dependency relationships that no scanner detects.
          </p>
          
          <p className="text-neutral-300 leading-relaxed text-lg">
            The implications extend beyond security. When a performance improvement or bug fix emerges for a widely-copied pattern, there is no systematic way to propagate that knowledge to all affected codebases. Each occurrence evolves independently, accumulating technical debt that compounds across the ecosystem.
          </p>

          {/* Quote Block */}
          <blockquote className="my-10 border-l-2 border-neutral-500 pl-6 py-2">
            <p className="text-lg italic text-neutral-200 leading-relaxed">
              {'"Fragment intelligence represents a fundamental shift in how we think about software dependencies. The question is no longer just what packages you use, but what code patterns have propagated into your codebase — and where they originally came from."'}
            </p>
          </blockquote>

          <p className="text-neutral-300 leading-relaxed text-lg">
            Modern development workflows have amplified the fragment propagation problem. AI assistants generate code based on training data that may include outdated or vulnerable patterns. Developers accept these suggestions without visibility into their provenance, unknowingly introducing legacy issues into new projects.
          </p>

          {/* Conclusion Section */}
          <h2 className="text-3xl font-serif font-medium md:text-4xl pt-8">
            Conclusion
          </h2>
          
          <p className="text-neutral-300 leading-relaxed text-lg">
            Addressing distributed code fragment visibility requires new infrastructure — systems capable of detecting semantic similarity across codebases, tracking fragment evolution over time, and surfacing relevant fixes when vulnerabilities emerge. This is the challenge fragment intelligence aims to solve.
          </p>
          
          <p className="text-neutral-300 leading-relaxed text-lg">
            The path forward involves treating code fragments as first-class citizens in the software supply chain. Just as package managers track library versions and security advisories, fragment intelligence systems must track pattern provenance, propagation paths, and ecosystem-wide evolution.
          </p>
          
          <p className="text-neutral-300 leading-relaxed text-lg">
            For security teams, maintainers, and developers building on AI-assisted workflows, visibility into recurring code fragments is becoming essential. The fragments you cannot see are the ones most likely to introduce risk — and the ones most likely to be left behind when critical updates emerge elsewhere in the ecosystem.
          </p>
        </article>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-neutral-600">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-neutral-300">Share this post</p>
            <div className="flex items-center gap-4">
              <button className="text-neutral-300 hover:text-white transition-colors">
                <LinkIcon className="w-5 h-5" />
              </button>
              <button className="text-neutral-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="text-neutral-300 hover:text-white transition-colors">
                <XIcon className="w-5 h-5" />
              </button>
              <button className="text-neutral-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm font-medium text-white bg-neutral-600 rounded-full hover:bg-neutral-500 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-neutral-600">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-neutral-600 flex items-center justify-center">
              <svg className="w-8 h-8 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div>
              <p className="font-medium text-white">{author.name}</p>
              {author.role && (
                <p className="text-sm text-neutral-400">{author.role}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
