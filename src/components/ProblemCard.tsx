'use client';

import Link from 'next/link';
import { ProblemMetadata } from '@/lib/problems';

interface ProblemCardProps {
  problem: ProblemMetadata;
}

export default function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <Link href={`/problems/${problem.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{problem.source}</h2>
        <div className="flex gap-2 mb-4">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
            {problem.difficulty}
          </span>
          {problem.topics.map((topic) => (
            <span key={topic} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">
              {topic}
            </span>
          ))}
        </div>
        <div className="prose max-w-none text-gray-900" dangerouslySetInnerHTML={{ __html: problem.statement }} />
      </div>
    </Link>
  );
} 