// app/roadmap/RoadmapItem.tsx
import { RoadmapItem as RoadmapItemType } from '../_data/roadmap-data';
import { RoadmapPhase as RoadmapPhaseType } from '../_data/roadmap-data';

interface RoadmapItemProps {
  item: RoadmapItemType;
}

function RoadmapItem({ item }: RoadmapItemProps) {
  return (
    <li className="flex">
      <div className={`h-6 w-6 rounded-full ${item.completed ? 'bg-blue-600' : 'bg-gray-500'} flex items-center justify-center flex-shrink-0 mt-0.5 mr-3`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={item.completed ? "M5 13l4 4L19 7" : "M12 6v6m0 0v6m0-6h6m-6 0H6"} 
          />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{item.title}</h3>
        <p className="text-gray-300">{item.description}</p>
      </div>
    </li>
  );
}

interface RoadmapPhaseProps {
  phase: RoadmapPhaseType;
}

export default function RoadmapPhase({ phase }: RoadmapPhaseProps) {
  const colorClasses = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    green: 'bg-green-600',
  };
  
  const badgeColorClass = colorClasses[phase.color as keyof typeof colorClasses] || 'bg-blue-600';
  
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <div className={`${badgeColorClass} text-white text-sm font-bold px-4 py-1 rounded-full mr-3`}>
          {phase.id.charAt(0).toUpperCase() + phase.id.slice(1)}
        </div>
        <h2 className="text-2xl font-bold">{phase.title}</h2>
      </div>
      
      <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
        <ul className="space-y-4">
          {phase.items.map((item, index) => (
            <RoadmapItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}