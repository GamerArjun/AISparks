import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
  const lessonsDir = path.join(process.cwd(), 'lessons');
  const filenames = fs.readdirSync(lessonsDir);
  const lessons = filenames.map((name) => ({
    slug: name.replace(/\.md$/, ''),
    title: name.replace(/\.md$/, '').replace(/-/g, ' '),
  }));
  return { props: { lessons } };
}

export default function Lessons({ lessons }) {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Lessons</h1>
      <ul className="space-y-4">
        {lessons.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/lessons/${slug}`} className="text-blue-600 hover:underline">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
