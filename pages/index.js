export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-xl animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow">
          Welcome to <span className="text-blue-400">AI Sparks</span>
        </h1>
        <p className="text-lg mb-8 text-gray-300">
          Learn AI tools, master prompts, and automate tasks — one bite-sized lesson at a time.
        </p>
        <a
          href="/lessons"
          className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 text-white rounded-lg shadow-lg font-medium ring-2 ring-blue-400 hover:ring-blue-300 focus:outline-none"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
}
