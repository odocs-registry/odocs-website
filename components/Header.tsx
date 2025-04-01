import Link from "next/link";

interface HeaderProps {
  isHomePage?: boolean;
}

export default function Header({ isHomePage = false }: HeaderProps) {
  return (
    <header
      className={`container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center ${
        !isHomePage ? "border-b border-gray-800" : ""
      }`}
    >
      <Link
        href="/"
        className="flex items-center"
      >
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          ODocs
        </span>
      </Link>

      {isHomePage ? (
        <>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/blog"
              className="hover:text-blue-400 transition"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="hover:text-blue-400 transition"
            >
              FAQ
            </Link>
            <Link
              href="/roadmap"
              className="hover:text-blue-400 transition"
            >
              Roadmap
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link
              href="#contribute"
              className="hidden sm:block px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition"
            >
              Join the Initiative
            </Link>
            <Link
              href="https://github.com/odocs-dev/odocs"
              className="p-2 rounded-md border border-gray-700 hover:border-blue-500 transition"
              aria-label="GitHub Repository"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </Link>
          </div>
        </>
      ) : (
        <Link
          href="/"
          className="text-gray-300 hover:text-white transition"
        >
          Back to Home
        </Link>
      )}
    </header>
  );
}
