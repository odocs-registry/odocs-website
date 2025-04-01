// app/faq/_data/faq-data.ts

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is ODocs?",
    answer: "ODocs (Open Documentation Registry) is an open-source initiative to create a standardized registry for framework documentation that helps AI coding assistants generate accurate, version-specific code. Think of it as a centralized but open platform where versioned documentation can be published, discovered, and pulled into AI workflows."
  },
  {
    question: "What problem is ODocs solving?",
    answer: "Currently, when developers use AI assistants for coding, they face several problems:\n\n1. AI models can't know which specific framework versions you're using\n2. They often suggest outdated or incompatible code patterns\n3. Developers must manually copy-paste documentation into prompts\n4. This manual approach is tedious, error-prone, and doesn't scale\n\nODocs solves these problems by automatically detecting your framework versions and providing the right documentation context to AI assistants, eliminating the need for manual context-setting."
  },
  {
    question: "How does ODocs work?",
    answer: "ODocs works through a simple but powerful approach:\n\n1. **Documentation Registry**: Framework maintainers publish LLM-optimized documentation with specific version tags.\n2. **Framework Detection**: When you run `odocs serve`, the system automatically scans your project files (package.json, requirements.txt, etc.) to detect which frameworks and versions you're using.\n3. **Documentation Serving**: ODocs automatically pulls the relevant documentation for your specific framework versions.\n4. **AI Integration**: A local server provides both API and MCP endpoints that AI assistants can connect to, giving them access to the correct documentation context."
  },
  {
    question: "Is ODocs available to use today?",
    answer: "ODocs is in the early stages of development. We're building the foundation of the registry and working to define standards for LLM-optimized documentation. You can follow our progress on GitHub and join the community to contribute to the project."
  },
  {
    question: "How can I contribute to ODocs?",
    answer: "There are several ways to contribute:\n\n- **Framework Maintainers**: Help define standards for LLM-optimized documentation and contribute documentation for your framework.\n- **Developers**: Contribute to the core registry infrastructure, framework detection tools, or AI integration layers.\n\nVisit our GitHub repository to get started."
  },
  {
    question: "Which frameworks will be supported?",
    answer: "Our initial focus is on popular frameworks like Next.js, React, Vue/Nuxt, Django, and FastAPI. However, the registry is designed to be extensible to any programming framework or library across all ecosystems. The frameworks we support will be driven by community contributions and interest."
  },
  {
    question: "How will ODocs integrate with AI coding assistants?",
    answer: "ODocs will integrate with AI coding assistants through a local server that runs on your machine and provides two integration methods:\n\n- **MCP Integration**: A Model Context Protocol server at `localhost:3820/mcp` for assistants like ChatGPT and Claude.\n- **API Integration**: A RESTful API at `localhost:3820/api` for models that support function calling and tool usage.\n\nThe server automatically starts when you run `odocs serve` and handles all the complexity of providing the right documentation to your AI assistant."
  },
  {
    question: "Is ODocs free and open source?",
    answer: "Yes, ODocs is an open-source project. The core registry protocols, CLI tools, and basic integrations are fully open source under the MIT License. Our commitment is to maintain the core functionality as free and open-source, ensuring that the baseline experience remains accessible to all developers."
  },
  {
    question: "How does ODocs compare to existing documentation solutions?",
    answer: "Unlike traditional documentation websites or tools, ODocs is specifically designed for AI consumption. It provides structured, versioned documentation in formats optimized for LLMs, with a focus on enabling accurate code generation. While tools like Docusaurus or ReadTheDocs are great for human-readable documentation, ODocs fills the gap for AI-readable, version-aware documentation."
  },
  {
    question: "Will there be support for private documentation?",
    answer: "Yes, future development plans include private documentation repositories for organizations with internal frameworks and libraries. This will allow companies to use ODocs for their proprietary code while maintaining security and privacy."
  },
  {
    question: "When will ODocs be ready for production use?",
    answer: "We're working on a phased approach to development. The roadmap outlines our priorities: first building the foundation with the registry and format standardization, then implementing AI integration, and finally expanding the ecosystem. Our progress will depend on community contributions and interest. Check our GitHub repository for the most up-to-date information on our progress."
  }
];