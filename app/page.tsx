import { getHome } from "@/lib/queries"
import { urlFor } from "@/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, User } from "lucide-react"
import { PortableText } from "@portabletext/react"

export default async function HomePage() {
  const home = await getHome()

  if (!home) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Please add your home page content in Sanity Studio.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-700/25"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                  {home.hero?.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {home.hero?.subtitle}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Contact Me
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="flex gap-4">
                <a
                  href={home.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={home.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative h-[400px] lg:h-[500px]">
              {home.hero?.image ? (
                <Image
                  src={urlFor(home.hero.image).url()}
                  alt="Hero"
                  fill
                  className="object-cover rounded-2xl shadow-2xl dark:opacity-90"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-blue-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <User className="w-32 h-32 text-blue-300 dark:text-blue-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      {home.about && (
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {home.about.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <PortableText value={home.about.description} />
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      {home.skills && (
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {home.skills.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <PortableText value={home.skills.description} />
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      {home.projects && (
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {home.projects.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <PortableText value={home.projects.description} />
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {home.contact && (
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {home.contact.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <PortableText value={home.contact.description} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

