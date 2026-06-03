"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const useCases = [
  { label: "AI-Generated Code Integration", href: "/use-cases/ai" },
  { label: "Internal Project Copying", href: "/use-cases/engineering" },
];

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileUseCasesOpen, setIsMobileUseCasesOpen] = useState(false);

  return (
    <header className="relative z-50 w-full py-6 px-5 sm:px-6 md:px-12 lg:px-16">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Distributed Code Intelligence
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Home
          </Link>
          
          {/* Use Cases Dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors py-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Use Cases
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {// Dropdown Menu - pt-2 creates hover bridge, no gap }
            <div
              className={`absolute top-full left-0 pt-2 z-[100] transition-all duration-200 ${
                isDropdownOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="w-64 bg-white rounded-lg border border-border shadow-lg overflow-hidden">
                {useCases.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>* */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50">
          <div className="px-5 py-4 space-y-1">
            <Link
              href="/"
              className="block py-3 text-base font-medium text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Use Cases Accordion */}
            {/* <div>
              <button
                className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground"
                onClick={() => setIsMobileUseCasesOpen(!isMobileUseCasesOpen)}
              >
                Use Cases
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileUseCasesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileUseCasesOpen && (
                <div className="pl-4 space-y-1">
                  {useCases.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileUseCasesOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}
