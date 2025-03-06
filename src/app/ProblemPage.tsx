'use client';

import Chat from '@/components/Chat';

interface ProblemPageProps {
  statement: string;
}

export default function ProblemPage({ statement }: ProblemPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">IMO 2019 Problem 1</h1>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: statement }} />
        </div>
        <Chat problem={statement} />
      </div>
    </main>
  );
} 