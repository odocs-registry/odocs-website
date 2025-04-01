import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { roadmapData } from './_data/roadmap-data';
import RoadmapPhase from './_components/RoadmapPhase';
import Link from 'next/link';

export const metadata = {
  title: 'ODocs Project Roadmap',
  description: 'Development roadmap for the ODocs open documentation registry initiative',
};

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-10">Project Roadmap</h1>
          
          <p className="text-xl text-gray-300 mb-12">
            ODocs is an ambitious open-source initiative, and we&apos;re taking a phased approach to development.
            Here&apos;s our current roadmap, which will evolve based on community feedback and contributions.
          </p>
          
          {/* Roadmap Phases */}
          {roadmapData.map((phase) => (
            <RoadmapPhase key={phase.id} phase={phase} />
          ))}
          
          {/* Join Us CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Help Shape Our Roadmap</h2>
            <p className="text-gray-300 mb-6">
              ODocs is a community-driven project, and we&apos;d love your input on our roadmap. 
              Join us on GitHub to contribute to the discussion and help prioritize features.
            </p>
            <Link 
              href="https://github.com/odocs-dev/odocs"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition inline-block"
            >
              Contribute on GitHub
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}