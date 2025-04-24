"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ai-coding-assistant.com</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">
              Features
            </Link>
            <Link href="#use-cases" className="text-gray-700 hover:text-teal-600 transition-colors">
              Use Cases
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-teal-600 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors">
              Testimonials
            </Link>
            <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-lg">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="#features"
                className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Features
              </Link>
              <Link
                href="#use-cases"
                className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Use Cases
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={closeMenu}
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-teal-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Testimonials
              </Link>
              <Button className="bg-teal-600 hover:bg-teal-700 w-full">Get Started</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
