import { Briefcase, Lightbulb, PuzzleIcon as PuzzlePiece, Users, Smartphone } from "lucide-react"

export default function UseCasesSection() {
  return (
    <section className="py-20 bg-white" id="use-cases">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Build Smarter, Ship Faster – With AI-Powered Web Development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="flex items-start group">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Prototyping</h3>
              <p className="text-gray-700">Build MVPs faster than ever with AI-assisted development.</p>
            </div>
          </div>

          <div className="flex items-start group">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing Ideas</h3>
              <p className="text-gray-700">Instantly generate variations to test different approaches.</p>
            </div>
          </div>

          <div className="flex items-start group">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <PuzzlePiece className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning to Code</h3>
              <p className="text-gray-700">Understand code changes via AI explanations and suggestions.</p>
            </div>
          </div>

          <div className="flex items-start group">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Productivity</h3>
              <p className="text-gray-700">Collaborate and generate consistent code across your team.</p>
            </div>
          </div>

          <div className="flex items-start group">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-Friendly</h3>
              <p className="text-gray-700">Develop on any device with our responsive AI code assistant.</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Developer team collaborating on AI-powered web development"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-xl text-gray-700 leading-relaxed">
                Whether you're a solo indie hacker, startup founder, or experienced developer, ai-coding-assistant.com
                makes it easy to build apps with AI. Harness the power of top models from platforms like OpenAI, Gemini,
                Anthropic, Groq, LM Studio, and others — all within a simple browser-based interface.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 rounded-lg p-6">
            <p className="text-gray-700">
              Looking for the best way to use AI for web development? Explore one of the most powerful AI code
              assistants and AI web builders online. Built for modern devs who want to leverage open source AI projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
