import { CheckCircle2, Code, Github, Globe, Lock, Zap } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Developers Love ai-coding-assistant.com
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Web Builder</h3>
            <p className="text-gray-700">
              Turn prompts into live code. Use AI to build and preview apps instantly in your browser.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg flex items-center justify-center mb-6">
              <Github className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Open Source AI Assistant</h3>
            <p className="text-gray-700">
              Customize everything. Connect your own models, adapt prompts, and own your workflow.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Web Development Toolkit</h3>
            <p className="text-gray-700">
              Integrated terminal, image-aware prompting, ZIP export, GitHub push — all in one place.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Installation Needed</h3>
            <p className="text-gray-700">Start coding now. No downloads, no setup, no platform lock-in.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Local-Friendly</h3>
            <p className="text-gray-700">Run local models. Keep your code and data private.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Supports Full-Stack</h3>
            <p className="text-gray-700">Frontend, backend, database queries, and API routes – all covered.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
