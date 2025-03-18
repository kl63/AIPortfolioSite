import { client } from "@/lib/sanity"
import { Experience } from "@/lib/types"
import { PortableText } from "@portabletext/react"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { format, parseISO } from "date-fns"

async function getExperiences() {
  return client.fetch<Experience[]>(`*[_type == "experience"] | order(startDate desc)`)
}

function formatDate(dateString: string | undefined) {
  if (!dateString) return "Present"
  try {
    return format(parseISO(dateString), "MMM yyyy")
  } catch (error) {
    console.error("Error formatting date:", dateString, error)
    return "Invalid date"
  }
}

export default async function ExperiencePage() {
  const experiences = await getExperiences()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Work Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My professional journey and career highlights
            </p>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience._id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:pl-8" : "md:pl-1/2 md:pr-8"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Content */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-blue-100 dark:border-gray-700">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-medium">{experience.position}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{experience.company}</h2>
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
                      </div>
                      {experience.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      )}
                    </div>
                    <div className="prose prose-blue dark:prose-invert max-w-none">
                      <PortableText value={experience.description} />
                    </div>
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 