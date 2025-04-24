import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600" id="cta">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Building with AI Today – It's Free and Open Source
          </h2>
          <p className="text-xl text-teal-100 mb-10">
            Whether you're creating a simple portfolio, a complex SaaS app, or just exploring, ai-coding-assistant.com
            gives you the tools you need to build smarter. Get started now with one click.
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50" asChild>
            <a href="https://assistant.ai-coding-assistant.com">
              <Globe className="mr-2 h-5 w-5" />
              Launch the Assistant
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
