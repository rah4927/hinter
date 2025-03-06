import ProblemList from '@/components/ProblemList';
import { getAllProblems } from './actions';

export default async function Home() {
  const problems = await getAllProblems();

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Problem Assistant</h1>
        <ProblemList problems={problems} />
      </div>
    </main>
  );
}
