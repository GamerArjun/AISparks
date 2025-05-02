export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8 max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to AI Sparks</h1>
        <p className="text-lg mb-6 text-gray-700">
          Learn AI tools, prompts, and workflows. Simple lessons. Real results.
        </p>
        <a
          href="/lessons"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
}
