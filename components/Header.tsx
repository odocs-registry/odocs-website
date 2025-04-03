"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { EXTERNAL_LINKS } from "./constants";

interface HeaderProps {
  isHomePage?: boolean;
}

export default function Header({ isHomePage = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to implement sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 bg-gray-900/95 backdrop-blur-sm shadow-md' 
          : 'relative bg-transparent'
      } ${!isHomePage ? 'border-b border-gray-800' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center z-10"
        >
          <span className="text-2xl font-bold text-white">
            ODocs
          </span>
        </Link>

        {isHomePage ? (
          <>
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/blog"
                className="hover:text-blue-400 transition"
              >
                Blog
              </Link>
              <Link
                href="/roadmap"
                className="hover:text-blue-400 transition"
              >
                Roadmap
              </Link>
              <Link
                href="/faq"
                className="hover:text-blue-400 transition"
              >
                FAQ
              </Link>
            </nav>
            <div className="flex space-x-4 z-10">
              <Link
                href="#"
                className="hidden sm:block px-4 py-2 rounded-md border border-gray-400 hover:border-blue-400 hover:text-blue-400 transition"
                data-tally-open="mRjga9"
                data-tally-layout="modal"
                data-tally-auto-close="0"
                data-tally-width="400"
              >
                Join the Community
              </Link>
              <Link
                href={EXTERNAL_LINKS.GITHUB_REPO}
                className="flex items-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition space-x-2"
                aria-label="GitHub Repository"
                target="_blank" 
              >
                <span>Star us on GitHub</span>
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </Link>
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center">
                <nav className="flex flex-col items-center space-y-8 text-xl">
                  <Link
                    href="/blog"
                    className="hover:text-blue-400 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/roadmap"
                    className="hover:text-blue-400 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Roadmap
                  </Link>
                  <Link
                    href="/faq"
                    className="hover:text-blue-400 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="#"
                    className="px-6 py-3 rounded-md border border-gray-400 hover:border-blue-400 hover:text-blue-400 transition"
                    onClick={() => setMobileMenuOpen(false)}
                    data-tally-open="mRjga9"
                    data-tally-layout="modal"
                    data-tally-auto-close="0"
                    data-tally-width="400"
                  >
                    Join the Community
                  </Link>
                  <Link
                    href={EXTERNAL_LINKS.GITHUB_REPO}
                    className="flex items-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition space-x-2"
                    target="_blank"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Star us on GitHub</span>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition"
          >
            Back to Home
          </Link>
        )}
      </div>
    </header>
  );
}