import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Chat from '@/components/Chat';

export default function ProblemPage({ params }: { params: { id: string } }) {
  const problemFile = fs.readFileSync(path.join(process.cwd(), 'problems/2019/p1.md'), 'utf8');
  const { data, content } = matter(problemFile);
  const [statement, solution] = content.split('---').map(s => s.trim());
  
  console.log('Statement:', statement);
  console.log('Content:', content);

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">IMO Problem Assistant</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">IMO 2019 Problem 1</h2>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: statement }} />
        </div>
        <Chat problem={statement} />
      </div>
    </main>
  );
} 