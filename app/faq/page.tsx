import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { faqData } from './_data/faq-data';
import FAQItem from './_components/FAQItem';
import { EXTERNAL_LINKS } from '@/components/constants';

export const metadata = {
  title: 'ODocs FAQ - Open Documentation Registry for AI Code Generation',
  description: 'Frequently asked questions about ODocs, the open documentation registry for AI code generation',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-10">Frequently Asked Questions</h1>
          
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <FAQItem key={index} item={faq} />
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
            <p className="text-gray-300 mb-6">
              If you have a question that&apos;s not answered here, feel free to reach out to us on GitHub or join our community Discord.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href={`${EXTERNAL_LINKS.GITHUB_REPO}/discussions`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
              >
                Ask on GitHub
              </Link>
              <Link 
                href={EXTERNAL_LINKS.DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord Community"
                className="px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-md text-white font-medium transition"
              >
                Join Discord
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}