import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getStaticPaths() {
  const lessonsDir = path.join(process.cwd(), 'lessons');
  const filenames = fs.readdirSync(lessonsDir);
  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'lessons', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);
  const html = marked(content);
  return { props: { html, title: data.title || params.slug } };
}

export default function Lesson({ html, title }) {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} className="prose" />
    </div>
  );
}
