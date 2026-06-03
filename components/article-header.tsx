import Link from "next/link";
import { ChevronRight, Link2, Linkedin, Facebook } from "lucide-react";

// X/Twitter icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Image placeholder icon
function ImagePlaceholderIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="2.5" opacity="0.5" />
      <path
        d="M21 17.5L16.5 12L13 16L10 13L3 21H21V17.5Z"
        opacity="0.5"
      />
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
      />
    </svg>
  );
}

interface ArticleHeaderProps {
  breadcrumbs: { label: string; href: string }[];
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishDate: string;
  readingTime: string;
  heroImage?: string;
}

export function ArticleHeader({
  breadcrumbs,
  title,
  author,
  publishDate,
  readingTime,
  heroImage,
}: ArticleHeaderProps) {
  return (
    <article className="bg-background">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-foreground mb-8 md:mb-10">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
              <Link
                href={crumb.href}
                className="hover:opacity-70 transition-opacity"
              >
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl max-w-3xl">
          {title}
        </h1>

        {/* Metadata row */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-between gap-6">
          {/* Author info */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImagePlaceholderIcon className="w-5 h-5 text-neutral-400" />
              )}
            </div>
            
            {/* Author name and meta */}
            <div className="flex flex-col">
              <span className="font-medium text-foreground">{author.name}</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{publishDate}</span>
                <span>•</span>
                <span>{readingTime}</span>
              </div>
            </div>
          </div>

          {/* Share icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Copy link"
            >
              <Link2 className="w-5 h-5 text-foreground" />
            </button>
            <a
              href="#"
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="#"
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Share on X"
            >
              <XIcon className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="#"
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="mx-auto max-w-5xl px-6 pb-12 md:pb-16 lg:pb-20">
        <div className="relative aspect-[16/9] rounded-2xl bg-neutral-300 overflow-hidden flex items-center justify-center">
          {heroImage ? (
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <ImagePlaceholderIcon className="w-24 h-24 text-neutral-400" />
          )}
        </div>
      </div>
    </article>
  );
}
