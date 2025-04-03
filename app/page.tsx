import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/components/constants";

export const metadata = {
  title: "ODocs - Open Documentation Registry for AI Code Generation",
  description:
    "An open-source initiative to solve version blindness in AI code generation through a standardized documentation registry.",
  keywords:
    "documentation registry, AI code generation, framework versions, open source, developer tools, version blindness, Docker Hub for documentation",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <Header isHomePage={true} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[calc(100vh-76px)] py-16 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Open Documentation Registry for AI Code Generation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Stop debugging AI-generated code. Get version-aware suggestions that work with frameworks in your repository the first time.
          </p>
          <p className="mb-8 text-gray-400">
            Initial proof of concept for Hono 4.7.5 now available!
          </p>
          <div className="flex justify-center mb-12">
            <Link 
              href={EXTERNAL_LINKS.GITHUB_REPO} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="px-10 py-5 rounded-md bg-blue-600 hover:bg-blue-700 transition text-xl font-medium flex items-center shadow-lg hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="mr-3">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Star us on GitHub
            </Link>
          </div>
          <div className="animate-bounce mt-4 mb-6">
            <a 
              href="#problem"
              className="inline-block cursor-pointer p-2 rounded-full hover:bg-gray-800/30 transition-colors"
              aria-label="Scroll to problem section"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section
  id="problem"
  className="bg-gray-800/30 py-16 scroll-mt-24"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        The Problem: Version-Blind AI
      </h2>
      <p className="text-xl text-gray-300">
        Every AI coding assistant faces the same critical limitation:
        version blindness. They cannot detect which version of a framework
        you&apos;re using, nor access the correct documentation for that
        version.
      </p>
    </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-red-400">
                Without Version-Aware AI
              </h3>
              <div className="bg-gray-900 rounded-md">
                <div className="overflow-x-auto">
                  <pre className="p-4">
                    <code className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                      {`// AI suggests outdated dependency versions
// package.json created by AI
{
  "dependencies": {
    "next": "^13.0.0",
    "react": "^17.0.2"
  }
}

// Developer runs npm install and gets outdated 
// versions missing years of improvements
// AI then generates code for older patterns:

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  
  // Client-side fetching pattern from older Next.js
  useEffect(() => {
    if (id) {
      fetch(\`/api/products/\${id}\`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                With Version-Aware AI
              </h3>
              <div className="bg-gray-900 rounded-md">
                <div className="overflow-x-auto">
                  <pre className="p-4">
                    <code className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                      {`// With ODocs Version Registry:
// package.json created by AI 
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.2.0"
  }
}

// Developer runs npm install
// With version-specific knowledge, 
// AI generates modern App Router code:

import { notFound } from 'next/navigation';

// Server component with built-in data fetching
async function getProduct(id) {
  const res = await fetch(
    \`https://api.example.com/products/\${id}\`
  );
  if (!res.ok) return undefined;
  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <h3 className="text-2xl font-bold mb-4 text-center">
              This affects every ecosystem:
            </h3>
            <div className="p-6 rounded-lg bg-gradient-to-r from-red-900/30 to-red-800/20 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-red-900/50 hover:border-red-700 transition">
                  <h4 className="font-bold text-lg mb-2 text-red-400">
                    JavaScript/TypeScript
                  </h4>
                  <p className="text-gray-300">
                    React hooks that worked in 17.0 but throw errors in 18.2
                  </p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-red-900/50 hover:border-red-700 transition">
                  <h4 className="font-bold text-lg mb-2 text-red-400">
                    Python
                  </h4>
                  <p className="text-gray-300">
                    Django patterns that were best practice in 4.2 but
                    deprecated in 5.0
                  </p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-red-900/50 hover:border-red-700 transition">
                  <h4 className="font-bold text-lg mb-2 text-red-400">Java</h4>
                  <p className="text-gray-300">
                    Spring Boot configurations that are entirely restructured
                    between versions
                  </p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-red-900/50 hover:border-red-700 transition">
                  <h4 className="font-bold text-lg mb-2 text-red-400">Ruby</h4>
                  <p className="text-gray-300">
                    AI generates Rails 6 code while your project uses Rails 7
                  </p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-red-900/50 hover:border-red-700 transition">
                  <h4 className="font-bold text-lg mb-2 text-red-400">.NET</h4>
                  <p className="text-gray-300">
                    AI provides .NET 6 examples when you&apos;re building with .NET 8
                  </p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-red-900/50 hover:border-red-700 transition">
                  <h4 className="font-bold text-lg mb-2 text-red-400">
                    And many more...
                  </h4>
                  <p className="text-gray-300">
                    Every programming ecosystem faces this version blindness
                    problem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section
        id="solution"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            The Solution: ODocs
          </h2>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg md:text-xl text-gray-300 text-center">
              ODocs is an open-source registry that connects AI coding
              assistants with version-specific documentation, ensuring they
              generate compatible code on the first try.
            </p>

            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 my-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Our Approach:
              </h3>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-300">
                <li>
                  <strong>Documentation Registry:</strong> A central,
                  open-source registry where framework maintainers publish
                  LLM-optimized documentation with specific version tags (e.g.,{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    nextjs:latest
                  </code>
                  ,
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    nextjs:15.2
                  </code>
                  ,{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    django:5.0
                  </code>
                  )
                </li>
                <li>
                  <strong>Framework Detection:</strong> Tools that automatically
                  scan your project files to identify which frameworks and
                  versions you&apos;re using
                </li>
                <li>
                  <strong>Vector Database:</strong> Local embedding of
                  documentation for efficient retrieval, reducing token usage
                  and enabling precise search
                </li>
                <li>
                  <strong>AI Integration Layer:</strong> Open APIs that connect
                  with any AI coding assistant
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-5 rounded-lg my-8 border border-blue-500/30">
              <p className="italic mb-0 text-lg text-gray-100 leading-snug">
                &quot;Even the latest AI models suffer from version blindness – they
                cannot detect which framework version you&apos;re using or access the
                right documentation for it.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-800/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How ODocs Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="order-2 md:order-1 bg-gray-900 rounded-lg border border-gray-700 shadow-xl">
              <div className="overflow-x-auto">
                <pre className="p-4 text-sm text-gray-300 whitespace-pre-wrap break-words">
                  {`# Start the ODocs server (auto-detects frameworks)
$ odocs serve

→ Scanning package.json...
→ Detected frameworks:
  - nextjs:15.2.1
  - react:18.2.0
  - tailwindcss:3.3.0

→ Pulling documentation for detected frameworks...
→ Documentation pulled successfully

→ Embedding documentations for detected frameworks...
→ Documentation embedded successfully

→ API server running at http://localhost:2803/api
→ MCP server running at http://localhost:2803/mcp`}
                </pre>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full mr-4 text-white font-bold shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-lg">Framework Detection</h4>
                    <p className="text-gray-300">
                      Automatically scans your project files to identify which
                      frameworks and versions you&apos;re using or provides latest
                      version suggestions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full mr-4 text-white font-bold shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-lg">Documentation Serving</h4>
                    <p className="text-gray-300">
                      Pulls the relevant documentation from the registry and
                      embeds it in a local vector database.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full mr-4 text-white font-bold shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-lg">AI Integration</h4>
                    <p className="text-gray-300">
                      Your AI assistant connects to ODocs through MCP, API, or
                      IDE plugins.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full mr-4 text-white font-bold shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-lg">
                      Contextual Code Generation
                    </h4>
                    <p className="text-gray-300">
                      When you ask your AI assistant to generate code, it uses
                      version-specific documentation instead of outdated
                      patterns.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Integration Options - Redesigned */}
          <div className="max-w-5xl mx-auto mt-20 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-xl -m-4 transform -rotate-1"></div>

            <h3 className="text-2xl font-bold mb-8 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Integration Options
              </span>
            </h3>

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-gray-900/70 p-6 rounded-xl border-l-4 border-blue-500 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">CLI Tools</h4>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Zero-configuration command that automatically detects
                  framework versions and starts a local server.
                </p>
                <div className="mt-auto">
                  <div className="bg-black/50 rounded-lg p-3 font-mono text-blue-300 flex items-center">
                    <span className="text-gray-500 mr-2">$</span>
                    <code>odocs serve</code>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/70 p-6 rounded-xl border-l-4 border-purple-500 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    VS Code Extension
                  </h4>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  One-click installation with automatic detection of frameworks
                  and seamless AI integration within your IDE.
                </p>
                <div className="mt-auto">
                  <ul className="text-gray-300 text-sm">
                    <li className="flex items-start mb-2">
                      <span className="text-purple-400 mr-2">✓</span>
                      Automatic framework detection
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      Integrated AI context injection
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900/70 p-6 rounded-xl border-l-4 border-indigo-500 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-indigo-500/30">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-500/20 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    GitHub Copilot
                  </h4>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Companion functionality that enhances Copilot suggestions with
                  framework-specific context for accurate code generation.
                </p>
                <div className="mt-auto">
                  <ul className="text-gray-300 text-sm">
                    <li className="flex items-start mb-2">
                      <span className="text-indigo-400 mr-2">✓</span>
                      Version-aware code suggestions
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">✓</span>
                      Background framework detection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Current Development Status
          </h2>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-left">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Initial Proof of Concept Available!
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              We&apos;ve completed an initial working prototype of ODocs! While
              limited in scope, this proof of concept successfully demonstrates
              the core value proposition of solving version blindness in AI code
              generation.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Our current implementation focuses specifically on{" "}
              <strong>Hono 4.7.5</strong>, which already offers LLM-optimized
              documentation ready for AI consumption. This targeted prototype:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-300 space-y-2">
              <li>
                Uses a documentation repository with version-specific Hono
                documentation
              </li>
              <li>
                Includes a CLI tool that successfully detects Hono in your
                projects
              </li>
              <li>
                Provides a local API server that connects with AI assistants
              </li>
              <li>
                Demonstrates how version-specific documentation improves code
                generation
              </li>
            </ul>
            <div className="text-center">
              <Link
                href={EXTERNAL_LINKS.GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
              >
                Try the Prototype
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section
        id="contribute"
        className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Join the ODocs Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="h-14 w-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                For Framework Maintainers
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                We&apos;re especially looking for framework maintainers to help us
                expand beyond our initial Hono implementation.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 text-lg">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Contribute LLM-optimized documentation for your framework
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Help define standards for AI-friendly documentation
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Provide insights on version compatibility challenges
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Integrate documentation publishing into your release workflows
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="h-14 w-14 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">For Developers</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Help build the core ODocs infrastructure that will make
                version-aware AI coding possible across all ecosystems.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6 text-lg">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Test our Hono prototype and provide feedback
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Contribute to the core ODocs infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Help build IDE extensions and integrations
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Share your experiences with version mismatch issues
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Your involvement is crucial to expanding ODocs to support all
              major frameworks across programming languages!
            </p>

            <button
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
              data-tally-open="mRjga9"
              data-tally-layout="modal"
              data-tally-auto-close="0"
              data-tally-width="400"
            >
              Click to join the community!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
