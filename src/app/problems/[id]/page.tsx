import { getProblemById } from '@/app/actions';
import Chat from '@/components/Chat';

export default async function ProblemPage({ params }: { params: { id: string } }) {
  const { id } = await Promise.resolve(params);
  const problem = await getProblemById(id);
  
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
        <Chat problem={problem.statement} />
      </div>
    </main>
  );
} 