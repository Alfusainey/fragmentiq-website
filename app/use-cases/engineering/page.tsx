import { Navbar } from "@/components/navbar";
import { ArticleHeader } from "@/components/article-header";
import { EngineeringArticleBody } from "@/components/engineering-article-body";
import { Footer } from "@/components/footer";

export default function EngineeringArticlePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Use Cases", href: "/#use-cases" },
          { label: "Internal Project Copying", href: "/use-cases/engineering" },
        ]}
        title="When code moves between projects"
        author={{
          name: "Ernest Hemingway",
        }}
        publishDate="15 Jan 2024"
        readingTime="7 min read"
      />
      <EngineeringArticleBody />
      <Footer />
    </main>
  );
}
