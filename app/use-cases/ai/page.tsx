import { Navbar } from "@/components/navbar";
import { ArticleHeader } from "@/components/article-header";
import { ArticleBody } from "@/components/article-body";
import { Footer } from "@/components/footer";

export default function AIArticlePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Use Cases", href: "/#use-cases" },
          { label: "AI-Generated Code Integration", href: "/use-cases/ai" },
        ]}
        title="When AI writes code, who tracks it"
        author={{
          name: "Ernest Hemingway",
        }}
        publishDate="15 Jan 2025"
        readingTime="7 min read"
      />
      <ArticleBody />
      <Footer />
    </main>
  );
}
