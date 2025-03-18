import { Mail, Github, Linkedin, MapPin, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"
import { client } from "@/lib/sanity"

const defaultContact = {
  email: "your.email@example.com",
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://linkedin.com/in/yourusername",
  location: "Your Location",
  status: "open",
  availabilityDetails: "Please update your contact information in Sanity Studio"
}

async function getContactInfo() {
  try {
    const contact = await client.fetch(`*[_type == "contact"][0]`)
    return contact || defaultContact
  } catch (error) {
    console.error("Error fetching contact info:", error)
    return defaultContact
  }
}

export default async function ContactPage() {
  const contact = await getContactInfo()

  const statusMessages = {
    open: "Open to opportunities",
    closed: "Not currently available",
    freelance: "Open to freelance"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-gray-900/50 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-6">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I'm always excited to connect with fellow developers and explore new opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16 max-w-[1000px]">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Connect with me</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in hearing about new opportunities, projects, or just
                connecting with fellow developers.
              </p>
              <div className="space-y-4">
                <Link
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform" />
                  <span>{contact.email}</span>
                </Link>
                <Link
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                >
                  <Github className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Location</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Based in {contact.location}<br />
                {contact.availabilityDetails}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Available for new opportunities</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Current Status</h2>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="font-medium">{statusMessages[contact.status] || 'Open to opportunities'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 