import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from './_data/metadata';
import Link from 'next/link';
import { EXTERNAL_LINKS } from '@/components/constants';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This gets the current URL path
  // In a real implementation, you'd use the usePathname hook and pass the pathname
  // to a component that conditionally renders based on whether we're on a blog post page
  // For simplicity, we're adding the sidebar for all blog routes

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {children}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Recent Posts */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="border-b border-gray-700 pb-4 last:border-0">
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-lg font-medium hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                      <div className="text-sm text-gray-400 mt-1">
                        {post.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              {/* <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Get the latest ODocs updates right in your inbox.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button 
                    type="submit"
                    className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition text-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div> */}

              {/* GitHub CTA */}
              <div className="mt-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold mb-2">Join ODocs on GitHub</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Help us build the future of documentation for AI code generation.
                </p>
                <Link 
                  href={EXTERNAL_LINKS.GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white text-sm transition"
                >
                  Star on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}