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
  readingTime?: string;
}

export const blogPosts: BlogPostMetadata[] = [
  {
    id: "introducing-odocs",
    title: "Introducing ODocs: Open Documentation Registry for AI Code Generation",
    excerpt: "Today, we're excited to announce ODocs - a new approach to solving the version mismatch problem in AI-assisted coding by creating a standardized documentation registry.",
    date: "March 31, 2025",
    author: {
      name: "ODocs Team",
      role: "Core Contributors",
      avatar: "/images/odocs-logo.svg"
    },
    tags: ["Announcement", "Open Source", "AI", "Documentation"],
    readingTime: "5 min read"
  },
  {
    id: "standardizing-llm-documentation",
    title: "Standardizing Documentation for LLMs: Challenges and Approaches",
    excerpt: "Creating documentation that works well with Large Language Models requires rethinking how we structure and format technical information.",
    date: "March 25, 2025",
    author: {
      name: "Jane Smith",
      role: "Documentation Specialist",
      avatar: "/images/odocs-logo.svg"
    },
    tags: ["Documentation", "LLM", "Best Practices"],
    readingTime: "7 min read"
  }
];