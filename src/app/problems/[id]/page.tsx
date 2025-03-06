import { getProblemById } from '@/app/actions';
import Chat from '@/components/Chat';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ProblemPage({ params }: Props) {
  const { id } = params;
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