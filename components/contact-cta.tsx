"use client";

import Image from "next/image";

export function ContactCta() {
  return (
    <section className="bg-background px-8 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-screen-2xl">
        {/* Single card container */}
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#1f5f5f]">
          {/* Background image - using a different architectural image */}
          {/*<Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern glass building architecture"
            fill
            className="object-cover opacity-25 mix-blend-multiply"
          />*/}
          
          {/* Content - positioned above the background */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-20 md:px-16 md:py-28 lg:py-32">
            <h2 className="max-w-4xl text-3xl font-medium leading-tight text-white text-balance md:text-4xl lg:text-5xl xl:text-6xl">
              Let's talk about distributed code intelligence
            </h2>
            
            <div className="mt-8 max-w-3xl space-y-6 md:mt-10">
              {/* <p className="text-lg leading-relaxed text-white/90 md:text-xl lg:text-2xl lg:leading-relaxed">
                Are recurring code fragments creating visibility or maintenance challenges in your organization?
              </p> */}
              
              <p className="text-lg leading-relaxed text-white/80 md:text-xl lg:text-2xl lg:leading-relaxed">
                {"We are speaking with engineering leaders, developers, and security teams exploring challenges around distributed code intelligence."}
              </p>
            </div>
            
            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8 md:mt-12">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd9dETlnlFJQcYca13NxMZ8tjIkTK7pn7KjsaLYjOYVdthqOA/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 md:text-lg"
              >
                Share Your Experience
              </a>
              <a
                href="https://www.linkedin.com/in/alfuj"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-transparent px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10 md:text-lg"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
