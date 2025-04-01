import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 mt-10">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mb-2 mt-4">{children}</h4>,
    p: ({ children }) => <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>,
    a: ({ href, children }) => {
      const isInternal = href?.startsWith('/');
      if (isInternal) {
        return <Link href={href as string} className="text-blue-400 hover:text-blue-300 underline">{children}</Link>;
      }
      return (
        <a 
          href={href} 
          className="text-blue-400 hover:text-blue-300 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 ml-4 text-gray-300">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 ml-4 text-gray-300">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4 text-gray-300">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-900 px-1.5 py-0.5 rounded font-mono text-sm">
        {children}
      </code>
    ),
    img: ({ src, alt, width, height }) => (
      <Image 
        src={src as string} 
        alt={alt as string} 
        width={Number(width) || 1200} 
        height={Number(height) || 630} 
        className="rounded-lg my-6"
      />
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-gray-700 my-8" />,
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-700">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 bg-gray-800 text-left text-gray-200 font-bold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 border-b border-gray-700 text-gray-300">
        {children}
      </td>
    ),
    ...components,
  };
}