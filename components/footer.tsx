import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-300">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">ai-coding-assistant.com</h3>
            <p className="text-gray-400 max-w-md">
              Open source AI code assistant for full-stack web development. Build apps with AI in your browser – fast,
              flexible, and free.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link href="/legal" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ai-coding-assistant.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
