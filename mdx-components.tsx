import type { MDXComponents } from 'mdx/types';
import { useMDXComponents as getBlogComponents } from './app/blog/_lib/mdx-components';

// This file is required for Next.js to handle MDX files
// It will forward to our actual implementation in the blog folder
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getBlogComponents(components);
}