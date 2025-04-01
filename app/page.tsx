import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'ODocs - Open Documentation Registry for AI Code Generation',
  description: 'An open-source initiative to create a standardized documentation registry that helps AI assistants generate accurate, version-specific code.',
  keywords: 'documentation registry, AI code generation, framework versions, open source, developer tools, Next.js, React, Django',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <Header isHomePage={true} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Open Documentation Registry for AI Code Generation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
            A community-driven approach to solve the version blindness in AI-assisted coding.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="#contribute" 
              className="px-8 py-4 rounded-md border border-gray-700 hover:border-blue-500 transition text-lg font-medium"
            >
              Join the Initiative
            </Link>
            <Link 
              href="https://github.com/odocs-dev/odocs" 
              className="px-8 py-4 rounded-md bg-blue-600 hover:bg-blue-700 transition text-lg font-medium"
            >
              Star us on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="bg-gray-800/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Problem
            </h2>
            <p className="text-xl text-gray-300">
              AI coding assistants share a fundamental limitation: 
              they cannot know which specific version of a framework you&apos;re using, 
              nor can they access the correct documentation for that version.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              Currently, developers resort to manually copy-pasting documentation into their prompts
              to provide the necessary context. This is tedious, error-prone, and doesn&apos;t scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-red-400">Example: Version Mismatch</h3>
              <div className="bg-gray-900 rounded-md">
                <div className="overflow-x-auto">
                  <pre className="p-4">
                    <code className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                      {`// User has Next.js 15.2.1 installed
// But AI suggests code for Next.js 14.0.0:

// pages/products/[id].js
// (Using outdated Pages Router)
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  
  // Outdated pattern leads to runtime errors
  useEffect(() => {
    if (id) {
      fetch(\`/api/products/\${id}\`)
        .then(res => res.json())
        .then(setProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;
  // ...
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-green-400">Our Vision</h3>
              <div className="bg-gray-900 rounded-md">
                <div className="overflow-x-auto">
                  <pre className="p-4">
                    <code className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                      {`// With ODocs Registry:
// 1. Detect framework version: Next.js 15.2.1
// 2. Pull appropriate documentation
// 3. AI generates correct code:

// app/products/[id]/page.js
// (Using current App Router)
import { notFound } from 'next/navigation';

async function getProduct(id) {
  const res = await fetch(
    \`https://api.example.com/products/\${id}\`
  );
  if (!res.ok) return undefined;
  return res.json();
}

export default async function ProductPage({ 
  params 
}) {
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }
  // ...
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section id="vision" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            The Vision
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p>
              ODocs is an ambitious open-source initiative that aims to create a standardized documentation registry 
              for programming frameworks and libraries. We&apos;re building an ecosystem where:
            </p>
            
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 my-8">
              <h3 className="text-xl font-bold mb-4">How It Will Work</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Framework maintainers</strong> can publish their documentation in LLM-optimized formats with specific version tags like docker
                  (e.g., <code className="bg-gray-900 px-2 py-1 rounded">nextjs:latest</code>, <code className="bg-gray-900 px-2 py-1 rounded">nextjs:14.2</code>, 
                  <code className="bg-gray-900 px-2 py-1 rounded">django:5.0</code>)
                </li>
                <li>
                  <strong>Developers</strong> can &quot;pull&quot; the exact documentations they need into their AI coding workflows
                </li>
                <li>
                  <strong>AI assistants</strong> connect to the ODocs registry to access version-specific documentations
                </li>
                <li>
                  <strong>Result:</strong> Accurate, version-appropriate code generation across all programming ecosystems
                </li>
              </ol>
            </div>
            
            <p>
              Think of ODocs as a centralized registry where versioned documentation can be 
              published, discovered, and pulled into AI workflows.
            </p>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg my-8 italic">
              &quot;ODocs addresses and streamlines the blind spots in AI coding assistants – regardless of how recent the model is. 
              AI models trained on static data cannot inherently determine the exact version of a framework you are using or access the correct documentation for that version unless explicitly provided with that context.&quot;
            </div>
            
            <p>
              This problem affects <strong>every programming ecosystem</strong> - Python, JavaScript, Java, Ruby, .NET, and more.
              For rapidly evolving frameworks, this problem is particularly severe as major updates regularly introduce 
              significant breaking changes.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="bg-gray-800/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="order-1 md:order-1 w-full">
              <ol className="relative border-l border-gray-600">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 text-white font-bold">1</span>
                  <h3 className="text-xl font-bold mb-2">Documentation Registry</h3>
                  <p className="text-gray-300">
                    A central, open-source registry where framework maintainers publish LLM-optimized documentation with specific version tags.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 text-white font-bold">2</span>
                  <h3 className="text-xl font-bold mb-2">AI Integration Layer</h3>
                  <p className="text-gray-300">
                    Open APIs that connect with any AI coding assistant via MCP integration, tool-based integration, or direct API integration.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 text-white font-bold">3</span>
                  <h3 className="text-xl font-bold mb-2">Framework Version Detection</h3>
                  <p className="text-gray-300">
                    Tools that automatically detect framework versions across languages (package.json, requirements.txt, pom.xml, etc.)
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 text-white font-bold">4</span>
                  <h3 className="text-xl font-bold mb-2">Context-Aware Responses</h3>
                  <p className="text-gray-300">
                    Ensures AI code generation is appropriate for the specific versions of frameworks being used.
                  </p>
                </li>
              </ol>
            </div>
            
            <div className="order-2 md:order-2 w-full">
              <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl max-w-full">
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

→ API server running at http://localhost:3820/api
→ MCP server running at http://localhost:3820/mcp

# In another terminal or application
# Connect to ODocs via API
$ curl -X POST http://localhost:3820/api/query \\
  -d '{"question": "How do I create a Next.js server component?"}'

# AI assistants can also connect directly
# via Model Context Protocol (MCP)
connect_mcp("localhost:3820/mcp")`}
                  </pre>
                </div>
              </div>
              <div className="hidden md:block absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full filter blur-3xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="contribute" className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Join the Initiative
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="h-14 w-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">For Framework Maintainers</h3>
              <p className="text-gray-300 mb-6">
                Ensure your framework&apos;s documentation is correctly understood by AI assistants. Help us define standards for LLM-optimized docs.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Define versioning strategy
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Contribute documentation templates
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Highlight breaking changes between versions
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="h-14 w-14 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">For Developers</h3>
              <p className="text-gray-300 mb-6">
                Help build the core infrastructure that will make version-aware AI coding possible. Contribute to the registry and tooling.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Build registry infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Develop framework version detection
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Create AI integration protocols
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access / Interest Form */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the ODocs Community
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            We&apos;re in the early stages of building ODocs, and we&apos;d love to have you join us.
            Sign up to stay updated on our progress and get involved.
          </p>
          
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input type="text" id="name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input type="email" id="email" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white" />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-left text-sm font-medium text-gray-300 mb-1">I&apos;m interested in...</label>
                <select id="interest" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white">
                  <option>Contributing as a framework maintainer</option>
                  <option>Contributing as a developer</option>
                  <option>Contributing to community building</option>
                  <option>Using ODocs when it&apos;s ready</option>
                  <option>Just staying updated on progress</option>
                </select>
              </div>
              
              <div>
                <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition">
                  Join the Community
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}