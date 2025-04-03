// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from './_data/metadata';
import './blog.css'

export const metadata = {
  title: 'ODocs - Open Documentation Registry for AI Code Generation',
  description: 'Latest news, articles, and insights about the Open Documentation Registry, AI Code Generation etc.,',
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-full">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b border-gray-700 pb-12 last:border-0">
            <Link href={`/blog/${post.id}`} className="block group">
              <h2 className="text-2xl font-bold mb-3 underline group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center mb-4 text-sm text-gray-400">
              <div className="flex items-center">
                {post.author.avatar && (
                  <div className="mr-2 w-6 h-6 rounded-full overflow-hidden">
                    <Image 
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                    />
                  </div>
                )}
                <span>{post.author.name}</span>
              </div>
              <span className="mx-2">•</span>
              <time dateTime={post.date}>{post.date}</time>
              <span className="mx-2">•</span>
              <span>{post.readingTime}</span>
            </div>
            <p className="text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-1 bg-gray-800 text-xs rounded-md text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href={`/blog/${post.id}`}
              className="text-blue-400 font-medium hover:text-blue-300 transition-colors inline-flex items-center"
            >
              Read more
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-6">
          Subscribe to our newsletter to receive the latest updates about ODocs development and best practices.
        </p>
        <button
          data-tally-open="3qzp6d"
          data-tally-layout="modal"
          data-tally-auto-close="0"
          data-tally-width="376"
          data-tally-hide-title="1"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
        >
          Subscribe!
        </button>
      </div>
    </div>
  );
}