export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPostMetadata {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: Author;
  tags: string[];
  keywords: string;
  readingTime?: string;
}

export const blogPosts: BlogPostMetadata[] = [
  {
    id: "introducing-odocs",
    title: "Why Your AI Coding Assistant Is Generating Broken Code (And How ODocs Will Fix It)",
    excerpt: "We're excited to announce ODocs - Open Documentation Registry for AI Code Generation - an open-source project that helps AI-generated code stay up-to-date by providing a standardized, version-aware documentation system optimized for LLM consumption.",
    keywords: "documentation registry, AI code generation, vibe coding, framework versions, open source, developer tools, version blindness, Docker Hub for documentation",
    date: "April 3, 2025",
    author: {
      name: "Gokul Sivanesan",
      role: "Core Contributors",
      avatar: "/images/odocs-logo.svg"
    },
    tags: ["Announcement", "Open Source", "AI", "Documentation"],
    readingTime: "7 min read"
  }
];