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
    excerpt: "Today, we're excited to announce ODocs - Open Documentation Registry for AI Code Generation a new approach to solving the version blindness problem in AI-assisted coding by creating a standardized documentation registry.",
    date: "April 2, 2025",
    author: {
      name: "Gokul Sivanesan",
      role: "Core Contributors",
      avatar: "/images/odocs-logo.svg"
    },
    tags: ["Announcement", "Open Source", "AI", "Documentation"],
    readingTime: "5 min read"
  }
];