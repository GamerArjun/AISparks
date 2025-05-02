import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
  const lessonsDir = path.join(process.cwd(), 'lessons');
  const filenames = fs.readdirSync(lessonsDir);
  const lessons = filenames.map((name) => ({
    slug: name.replace(/\\.md$/, ''),
    title: name.replace(/\\.md$/, '').replace(/-/g, ' '),
  }));
  return { props: { lessons } };
}

export default function Lessons({ lessons }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Lessons</h1>
          <Link
            href="/"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            ← Back to Home
          </Link>
        </div>
        <ul className="space-y-4">
          {lessons.map(({ slug, title }) => (
            <li key={slug}>
              <Link
                href={`/lessons/${slug}`}
                className="block bg-white p-4 rounded-lg shadow hover:bg-blue-50 hover:shadow-md transition"
              >
                <h2 className="text-xl font-medium text-gray-900">{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
