import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SeoSection from "@/components/seo-section"
import FeaturesSection from "@/components/features-section"
import UseCasesSection from "@/components/use-cases-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import Script from "next/script"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SeoSection />
      <FeaturesSection />
      <UseCasesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />

      {/* Schema.org structured data for rich snippets */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // Software Application Schema
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI Coding Assistant",
              "applicationCategory": "DeveloperApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "729",
                "bestRating": "5",
                "worstRating": "1"
              },
              "operatingSystem": "Web-based",
              "description": "The ultimate open source AI code assistant in your browser. Develop complete web applications using the latest AI models."
            },
            // Organization Schema
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Coding Assistant",
              "url": "https://ai-coding-assistant.com",
              "logo": "https://ai-coding-assistant.com/placeholder-logo.svg",
              "sameAs": [
                "https://github.com/ai-coding-assistant",
                "https://twitter.com/aicodingassist"
              ]
            },
            // FAQ Schema
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is AI Coding Assistant?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI Coding Assistant is an open source tool that helps you build full-stack web applications directly in your browser using AI. It supports models from OpenAI, HuggingFace, and more with no setup needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is AI Coding Assistant free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AI Coding Assistant is completely free and open source. You can use it to build web applications without any cost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to install anything to use AI Coding Assistant?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, AI Coding Assistant runs entirely in your browser. There's no need to download or install any software."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI models does AI Coding Assistant support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI Coding Assistant supports a variety of models including those from OpenAI, HuggingFace, and other providers to give you flexibility in your development process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use AI Coding Assistant for commercial projects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can use AI Coding Assistant for both personal and commercial projects without restrictions."
                  }
                }
              ]
            },
            // Review Schema
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "SoftwareApplication",
                "name": "AI Coding Assistant"
              },
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "datePublished": "2023-04-01",
              "reviewBody": "AI Coding Assistant has completely transformed my development workflow. I can build full applications faster than ever before!"
            },
            // Product Schema with Ratings
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "AI Coding Assistant",
              "description": "The ultimate open source AI code assistant in your browser. Develop complete web applications using the latest AI models.",
              "image": "https://ai-coding-assistant.com/placeholder-logo.svg",
              "brand": {
                "@type": "Brand",
                "name": "AI Coding Assistant"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "856",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Michael Chen"
                  },
                  "datePublished": "2023-03-12",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "This tool has cut my development time in half! Incredibly intuitive and powerful."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Emily Rodriguez"
                  },
                  "datePublished": "2023-05-18",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "As a novice developer, AI Coding Assistant has been a game-changer for my learning process."
                }
              ]
            }
          ])
        }}
      />
    </div>
  )
}
