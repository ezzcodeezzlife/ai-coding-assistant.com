import { Code2 } from "lucide-react"

export default function SeoSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-6">
            <Code2 className="w-8 h-8 text-teal-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is an AI Code Assistant?</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            An AI code assistant is a powerful tool that helps developers write, debug, and generate code using
            artificial intelligence. At ai-coding-assistant.com, we go one step further: our AI assistant works entirely
            in your browser and supports full-stack web development. From backend APIs to frontend components,
            everything is built through intelligent suggestions powered by state-of-the-art language models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser-based AI code editor</h3>
            <p className="text-gray-700">Code directly in your browser with AI assistance, no downloads required.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple AI providers</h3>
            <p className="text-gray-700">Connect to OpenAI, HuggingFace, Groq, Mistral and more.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant web app generation</h3>
            <p className="text-gray-700">Turn your ideas into working code in seconds with AI assistance.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">One-click export or deployment</h3>
            <p className="text-gray-700">Deploy your projects instantly or export them for further development.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Open source and extensible</h3>
            <p className="text-gray-700">Customize the platform to fit your specific development needs.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Full-stack development</h3>
            <p className="text-gray-700">Build complete applications with frontend, backend, and database support.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
