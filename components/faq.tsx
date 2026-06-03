"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";

const faqItems = [
  {
    question: "What are recurring code fragments?",
    answer:
      "Recurring code fragments are semantically or structurally similar pieces of code that appear across repositories, documentation, Stack Overflow answers, internal projects, and AI-generated code. Over time, these fragments evolve independently while still sharing similar operational and security characteristics",
  },
  {
    question: "What kinds of intelligence can propagate across related code fragments?",
    answer:
      "Security vulnerabilities are only one example. Other forms of intelligence may also become disconnected across related fragments, including API deprecations, performance improvements, reliability fixes, licensing risks, and bug-related discussions across issue trackers, patch reviews, and developer forums.",
  },
  {
    question: "Why do related fragments evolve independently?",
    answer:
      "Once code fragments spread across ecosystems, they are rarely connected through traditional dependency relationships. Existing tooling typically tracks packages and libraries — not semantically related fragments distributed across repositories, forums, documentation, and AI-generated code.",
  },
  {
    question: "How is this different from SCA and SBOM tools?",
    answer:
      "Traditional Software Composition Analysis (SCA) and SBOM tools focus on dependency graphs and packaged components. Distributed code intelligence focuses on semantically related code fragments that exist outside traditional software supply chain boundaries.",
  },
  {
    question: "Is distributed code intelligence technically feasible at ecosystem scale?",
    answer:
      "Modern code analysis, semantic similarity techniques, and AI-assisted reasoning increasingly make it possible to identify related fragments across fragmented software ecosystems. Distributed code intelligence explores how operational knowledge and ecosystem intelligence can propagate across these distributed relationships.",
  },
];

export function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-neutral-950 text-white px-8 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-4xl font-medium leading-tight md:text-5xl lg:text-6xl mb-10 md:mb-14">
          FAQ
        </h2>

        {/* Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-800 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-start justify-between gap-6 p-6 md:p-8 text-left hover:bg-neutral-900/50 transition-colors"
              >
                <span className="text-lg font-medium md:text-xl lg:text-2xl">
                  {item.question}
                </span>
                <span className="flex-shrink-0 mt-1">
                  {openItems.includes(index) ? (
                    <X className="w-5 h-5 md:w-6 md:h-6 text-neutral-400" />
                  ) : (
                    <Plus className="w-5 h-5 md:w-6 md:h-6 text-neutral-400" />
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openItems.includes(index)
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 md:px-8 md:pb-8 text-lg leading-relaxed text-neutral-300 md:text-xl lg:text-xl lg:leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
