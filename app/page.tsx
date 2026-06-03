import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FragmentedKnowledge } from "@/components/fragmented-knowledge";
import { ToolingGap } from "@/components/tooling-gap";
import { ResearchEvidence } from "@/components/research-evidence";
import { ReuseScenarios } from "@/components/reuse-scenarios";
import { ConceptExploration } from "@/components/concept-exploration";
import { Faq } from "@/components/faq";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <FragmentedKnowledge />
      {/*
      <ToolingGap />
      <ResearchEvidence />
      <ReuseScenarios />
      <ConceptExploration />
      */}
      <Faq />
      <ContactCta />
      <Footer />
    </main>
  );
}
