import { getHome } from "@/lib/queries"
import { urlFor } from "@/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, FileText, User } from "lucide-react"

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
                  {home.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {home.subtitle}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href={home.ctaLink || '/about'}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                >
                  {home.ctaText || 'Learn More'}
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
              {home.heroImage ? (
                <Image
                  src={urlFor(home.heroImage).url()}
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

      {/* Featured Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Check out some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)`,
                }}
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-gray-800"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project {index + 1}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Brief description of the project and its key features.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'About Me',
                description: 'Learn more about my background and experience',
                icon: User,
                href: '/about',
              },
              {
                title: 'Projects',
                description: 'Explore my portfolio of work',
                icon: FileText,
                href: '/projects',
              },
              {
                title: 'GitHub',
                description: 'Check out my code repositories',
                icon: Github,
                href: home.githubUrl || '#',
                external: true,
              },
              {
                title: 'Contact',
                description: 'Get in touch with me',
                icon: Mail,
                href: '/contact',
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="p-3 bg-blue-50 dark:bg-gray-700 rounded-lg w-fit mb-4">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

