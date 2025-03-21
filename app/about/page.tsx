import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { User } from "lucide-react"
import Image from "next/image"
import { urlFor } from "@/lib/sanity"

interface Skill {
  category: string
  name: string
  level: number
  icon?: string
}

interface SkillGroups {
  [category: string]: Skill[]
}

async function getAbout() {
  const about = await client.fetch(`*[_type == "about"][0]`)
  console.log('About data:', about) // Debug log
  return about
}

async function getSkills() {
  const skills = await client.fetch(`*[_type == "skill"] | order(order asc)`)
  console.log('Skills data:', skills) // Debug log
  return skills
}

export default async function AboutPage() {
  const about = await getAbout()
  const skills = await getSkills()

  // Group skills by category
  const groupedSkills = skills.reduce((acc: SkillGroups, skill: Skill) => {
    const category = skill.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as SkillGroups)

  if (!about) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Please add your about information in Sanity Studio.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-950 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get to know more about my journey and aspirations
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-blue-100 dark:border-gray-700 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                {about.heroImage ? (
                  <Image
                    src={urlFor(about.heroImage).url()}
                    alt={about.name}
                    fill
                    className="object-cover dark:opacity-90"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <User className="w-16 h-16 text-gray-400 dark:text-gray-300" />
                  </div>
                )}
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{about.name}</h2>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">{about.subtitle}</p>
                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    href={about.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={about.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <PortableText value={about.description} />
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-16">
            {Object.entries(groupedSkills).map(([category, categorySkills]: [string, any[]]) => (
              <div key={category} className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={skill._id}
                      className="group relative perspective"
                      style={{
                        transform: `rotate(${index % 2 === 0 ? '3' : '-3'}deg)`,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Card */}
                      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                        {/* Skill Logo/Image */}
                        {skill.image ? (
                          <div className="relative w-20 h-20 mx-auto mb-4">
                            <Image
                              src={urlFor(skill.image).url()}
                              alt={skill.title || 'Skill'}
                              fill
                              className="object-contain dark:opacity-90"
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {(skill.title || skill.name || 'S').charAt(0)}
                            </span>
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                          {skill.title || skill.name || 'Unnamed Skill'}
                        </h3>

                        {/* Technologies */}
                        {skill.technologies && skill.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1 justify-center mt-3">
                            {skill.technologies.slice(0, 3).map((tech: string) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {skill.technologies.length > 3 && (
                              <span className="px-2 py-0.5 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                                +{skill.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Shadow effect */}
                      <div
                        className="absolute inset-0 bg-black/5 dark:bg-black/20 -z-10 rounded-xl transform translate-y-4 blur-sm transition-transform duration-300 group-hover:translate-y-6"
                        style={{
                          transform: `rotateX(10deg) translateZ(-10px)`,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 