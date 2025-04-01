// app/roadmap/roadmap-data.ts

export interface RoadmapItem {
  title: string;
  description: string;
  completed: boolean;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  color: string;
  items: RoadmapItem[];
}

export const roadmapData: RoadmapPhase[] = [
  {
    id: "foundation",
    title: "Foundation",
    color: "blue",
    items: [
      {
        title: "Core Documentation Registry",
        description: "Design and implement the basic registry architecture, storage mechanisms, and versioning system.",
        completed: false
      },
      {
        title: "Documentation Format Standardization",
        description: "Define standardized formats for LLM-optimized documentation that can be used across different frameworks.",
        completed: false
      },
      {
        title: "Framework Version Detection",
        description: "Build tools that automatically detect framework versions from package.json, requirements.txt, and other project files.",
        completed: false
      },
      {
        title: "Command-Line Tools",
        description: "Develop CLI tools that automatically detect frameworks and start local API/MCP servers with the right documentation context.",
        completed: false
      },
      {
        title: "Documentation Website",
        description: "Create comprehensive documentation for the project, including guidelines for framework maintainers and developers.",
        completed: false
      }
    ]
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    color: "purple",
    items: [
      {
        title: "MCP Protocol Implementation",
        description: "Implement Model Context Protocol support for major AI assistants like ChatGPT and Claude through a local server.",
        completed: false
      },
      {
        title: "API Integration",
        description: "Create RESTful APIs for models that support tool calling and function calling via the same local server.",
        completed: false
      },
      {
        title: "Enhanced Framework Detection",
        description: "Improve detection capabilities across more programming languages and package managers.",
        completed: false
      },
      {
        title: "VS Code Extension (Prototype)",
        description: "Develop a prototype VS Code extension that integrates with the registry and automatically runs the local server.",
        completed: false
      },
      {
        title: "Initial Framework Documentation",
        description: "Begin working with framework maintainers to develop LLM-optimized documentation for key frameworks.",
        completed: false
      }
    ]
  },
  {
    id: "ecosystem-expansion",
    title: "Ecosystem Expansion",
    color: "green",
    items: [
      {
        title: "IDE Plugins",
        description: "Develop plugins for JetBrains IDEs, Cursor, and other popular development environments.",
        completed: false
      },
      {
        title: "GitHub Copilot Integration",
        description: "Develop companion integration for GitHub Copilot to enhance its version awareness.",
        completed: false
      },
      {
        title: "Private Documentation Repositories",
        description: "Support for private documentation repositories for companies with internal frameworks and libraries.",
        completed: false
      },
      {
        title: "Team Collaboration Tools",
        description: "Collaborative features for teams working with shared documentation and frameworks.",
        completed: false
      },
      {
        title: "Analytics and Insights",
        description: "Tools for framework maintainers to understand how their documentation is being used and where improvements can be made.",
        completed: false
      }
    ]
  }
];