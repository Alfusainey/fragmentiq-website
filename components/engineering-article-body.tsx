"use client";

import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon, Linkedin, Facebook } from "lucide-react";

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIcons = [
  { icon: LinkIcon, label: "Copy link", href: "#" },
  { icon: Linkedin, label: "Share on LinkedIn", href: "#" },
  { icon: XIcon, label: "Share on X", href: "#" },
  { icon: Facebook, label: "Share on Facebook", href: "#" },
];

const tags = [
  "Code dependencies",
  "Internal projects", 
  "Code management",
  "Hidden snippets",
];

export function EngineeringArticleBody() {
  return (
    <article className="bg-neutral-800 text-white px-8 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb + Social row */}
        <div className="flex items-center justify-between mb-12">
          <nav className="flex items-center gap-2 text-sm text-neutral-300">
            <Link href="/use-cases" className="hover:text-white transition-colors">
              Engineering
            </Link>
            <span className="text-neutral-500">›</span>
            <span>Dependencies</span>
          </nav>
          
          <div className="flex items-center gap-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-4xl font-serif font-medium mb-8">Introduction</h2>
          
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              When developers copy code between internal projects, they create invisible dependencies that traditional tooling cannot track. A utility function copied from one repository to another carries no formal link back to its origin, yet both instances share the same underlying logic, vulnerabilities, and maintenance requirements.
            </p>
            <p>
              This pattern of informal code sharing accelerates development velocity in the short term. Teams can quickly adopt proven solutions without waiting for formal library extraction or package publication. However, as these copied fragments diverge over time, organizations accumulate hidden technical debt that compounds with each independent modification.
            </p>
          </div>
        </section>

        {/* Image with caption */}
        <figure className="mb-12">
          <div className="relative aspect-[16/10] bg-neutral-700 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-neutral-500">
              <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <figcaption className="mt-4 text-sm text-neutral-400 border-l-2 border-neutral-600 pl-3">
            Image caption goes here
          </figcaption>
        </figure>

        {/* Main content */}
        <section className="mb-12">
          <h3 className="text-2xl font-serif font-medium mb-6 text-white">
            Understanding hidden dependency networks in distributed codebases
          </h3>
          
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              The challenge of tracking code that moves between projects extends beyond simple copy-paste operations. Developers frequently adapt, extend, and refactor copied fragments to meet local requirements. These modifications create variant families where multiple implementations share common ancestry but exhibit different behaviors, security characteristics, and maintenance states.
            </p>
            <p>
              When a vulnerability is discovered in one instance of a copied fragment, the knowledge rarely propagates to other occurrences. Security teams may patch the original location while dozens of derived copies remain exposed. Without visibility into these hidden relationships, organizations cannot systematically assess their exposure or coordinate remediation efforts.
            </p>
          </div>
        </section>

        {/* Blockquote */}
        <blockquote className="border-l-2 border-neutral-500 pl-6 py-2 my-12">
          <p className="text-lg italic text-neutral-200 leading-relaxed">
            &ldquo;Organizations that lack visibility into internal code propagation patterns consistently underestimate their exposure to known vulnerabilities. The same fragment may exist in dozens of repositories, each with different maintenance cycles and security review processes.&rdquo;
          </p>
        </blockquote>

        {/* More content */}
        <section className="mb-12">
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              Traditional dependency management tools focus on explicitly declared package relationships. They excel at tracking npm modules, Maven artifacts, and other formally published dependencies. However, they provide no visibility into code that travels through informal channels: Slack messages, wiki pages, Stack Overflow answers, or direct file copies between repositories.
            </p>
            <p>
              This gap becomes increasingly problematic as organizations scale. Large engineering teams naturally develop internal code sharing practices that bypass formal dependency channels. Without centralized visibility, these practices create maintenance blind spots that accumulate over years of organic growth.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif font-medium mb-8">Conclusion</h2>
          
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              Addressing the hidden dependency problem requires new approaches that can detect semantic similarity across codebases without relying on explicit dependency declarations. Fragment-level intelligence provides visibility into how code actually moves and evolves across organizational boundaries.
            </p>
            <p>
              By surfacing these invisible relationships, teams can coordinate maintenance efforts, propagate security fixes more systematically, and make informed decisions about when to formalize shared code into properly managed libraries. The goal is not to eliminate informal code sharing but to bring visibility to patterns that currently operate in the shadows.
            </p>
            <p>
              As AI-generated code accelerates the proliferation of similar fragments across projects, the need for ecosystem-wide intelligence becomes increasingly urgent. Organizations that invest in understanding their internal code propagation patterns will be better positioned to maintain security and quality at scale.
            </p>
          </div>
        </section>

        {/* Share section */}
        <div className="text-center py-8 border-t border-neutral-700">
          <p className="text-sm font-medium text-white mb-4">Share this post</p>
          <div className="flex items-center justify-center gap-5">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 py-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm font-medium text-white bg-neutral-700 rounded-full hover:bg-neutral-600 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-8" />

        {/* Author bio */}
        <div className="flex flex-col items-center text-center py-8">
          <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <h4 className="text-base font-medium text-white">Ernest Hemingway</h4>
          <p className="text-sm text-neutral-400">Founder, HSDT</p>
        </div>
      </div>
    </article>
  );
}
