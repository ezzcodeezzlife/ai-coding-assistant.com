import { Button } from "@/components/ui/button"
import { Code, MessageSquare, Play, Download, ArrowRight, Github } from "lucide-react"

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Our Open Source AI Coding Assistant Works
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-300 to-blue-300 transform md:translate-x-[-50%] hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16 relative">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Choose a Model</h3>
                <p className="text-gray-700">Connect your favorite LLM: OpenAI, HuggingFace, Ollama, Groq, etc.</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 my-4 md:my-0">
                1
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
                        <Code className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="font-medium">Select AI Model</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" size="sm" className="justify-start">
                        OpenAI
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start">
                        HuggingFace
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start">
                        Groq
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start">
                        Ollama
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-16 relative">
              <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Prompt the Assistant</h3>
                <p className="text-gray-700">Type your request or upload image assets or code bases.</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 my-4 md:my-0">
                2
              </div>
              <div className="w-full md:w-1/2 md:pr-12">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="font-medium">Prompt Input</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                      Create a responsive landing page with a hero section, features grid, and contact form using React
                      and Tailwind CSS.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center mb-16 relative">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Watch Code Generate</h3>
                <p className="text-gray-700">Get high-quality code snippets and full projects instantly.</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 my-4 md:my-0">
                3
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
                        <Code className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="font-medium">Generated Code</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 text-sm text-gray-300 font-mono">
                      <div>{'import React from "react";'}</div>
                      <div>{'import { Button } from "./ui/button";'}</div>
                      <div>&nbsp;</div>
                      <div>{"export default function Hero() {"}</div>
                      <div>{"  return ("}</div>
                      <div>{'    <section className="py-20 bg-gray-50">'}</div>
                      <div>{"      // Code continues..."}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-16 relative">
              <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Preview & Debug</h3>
                <p className="text-gray-700">Run your project in a virtual terminal right inside the browser.</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 my-4 md:my-0">
                4
              </div>
              <div className="w-full md:w-1/2 md:pr-12">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="font-medium">Live Preview</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 h-32 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Live preview of code in browser"
                        className="h-full w-auto object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center relative">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Export or Deploy</h3>
                <p className="text-gray-700">One-click export to GitHub, ZIP download, or deploy to Netlify.</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 my-4 md:my-0">
                5
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
                        <Download className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="font-medium">Export Options</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                        <Github className="mr-2 h-4 w-4" />
                        Push to GitHub
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download ZIP
                      </Button>
                      <Button size="sm" variant="outline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Deploy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
