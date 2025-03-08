import { getProblemById } from '@/app/actions';
import Chat from '@/components/Chat';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const resolvedParams = await params;
  const problem = await getProblemById(resolvedParams.id);
  
  if (!problem) {
    return {
      title: 'Problem Not Found | Problem Assistant',
    };
  }

  return {
    title: `${problem.source} | Problem Assistant`,
    description: `Get help solving ${problem.source} with our AI-powered assistant`,
  };
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const resolvedParams = await params;
  const problem = await getProblemById(resolvedParams.id);
  
  if (!problem) {
    return (
      <main className="min-h-screen p-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Problem Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Problem Assistant</h1>
        <Chat problem={problem.statement} solution={problem.solution} />
      </div>
    </main>
  );
} 