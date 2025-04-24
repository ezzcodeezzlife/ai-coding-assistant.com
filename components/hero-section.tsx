import { Button } from "@/components/ui/button"
import { Rocket, BookOpen } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Full-Stack Web Apps with AI, Instantly
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Welcome to ai-coding-assistant.com — the ultimate open source AI code assistant in your browser. Develop
              complete web applications using the latest AI models like OpenAI, HuggingFace, and more. No downloads. No
              hassle.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Rocket className="mr-2 h-5 w-5" />
                Start Building with AI Now
              </Button>
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <BookOpen className="mr-2 h-5 w-5" />
                Learn How It Works
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI code assistant in the browser helping build full-stack web apps with AI models like OpenAI and HuggingFace."
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                New!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
       
      </div>
    </section>
  )
}
