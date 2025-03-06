'use client';

import ProblemCard from '@/components/ProblemCard';
import { ProblemMetadata } from '@/lib/problems';

export default function ProblemList({ problems }: { problems: ProblemMetadata[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {problems.map((problem) => (
        <ProblemCard key={problem.id} problem={problem} />
      ))}
    </div>
  );
} 