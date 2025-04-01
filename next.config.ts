import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */

  // Enable MDX
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // Configure MDX
  experimental: {
    mdxRs: true,
  },

  // for Cloudflare
  output: 'export',
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Use root mdx-components.tsx file which then forwards to our
    // blog-specific implementation
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig);
