import { client } from "@/lib/sanity"
import { Project } from "@/lib/types"
import { PortableText } from "@portabletext/react"
import { Github, Globe, Code2, Sparkles, Calendar, Tag, Eye } from "lucide-react"
import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import { format } from "date-fns"

async function getProjects() {
  return client.fetch<Project[]>(`*[_type == "project"] | order(completedDate desc)`)
}

export default async function ProjectsPage() {
  const projects = await getProjects()

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-6 hover:scale-105 transition-transform cursor-pointer">
              <Code2 className="w-5 h-5" />
              <span className="font-medium">Featured Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Building Digital Experiences
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A collection of my work and personal projects that showcase my skills and creativity
            </p>
          </div>
        </div>
      </div>

      {/* Projects Masonry Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project._id}
                className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-100 dark:border-gray-700 ${
                  index % 3 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                } hover:-translate-y-1`}
              >
                {/* Project Image */}
                {project.image && (
                  <div className={`relative overflow-hidden ${
                    index % 3 === 0 ? 'h-96' : 'h-48'
                  }`}>
                    <Image
                      src={urlFor(project.image).url()}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 dark:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Interactive overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                          >
                            <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 delay-75"
                          >
                            <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </a>
                        )}
                        <button className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 delay-150">
                          <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </button>
                      </div>
                    </div>

                    {/* Project status badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 text-white text-sm rounded-full backdrop-blur-sm ${
                        project.status === 'In Progress' 
                          ? 'bg-yellow-500/80 dark:bg-yellow-600/80'
                          : project.status === 'Planned'
                          ? 'bg-purple-500/80 dark:bg-purple-600/80'
                          : 'bg-blue-500/80 dark:bg-blue-600/80'
                      }`}>
                        {project.status || 'Completed'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Content */}
                <div className={`p-6 space-y-4 ${
                  index % 3 === 0 ? 'md:p-8' : ''
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <Sparkles className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                      </div>
                      <h2 className={`font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
                        index % 3 === 0 ? 'text-3xl' : 'text-2xl'
                      }`}>{project.title}</h2>
                    </div>
                    {project.completedDate && (
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(project.completedDate), 'MMM yyyy')}</span>
                      </div>
                    )}
                  </div>

                  <div className="prose prose-blue dark:prose-invert max-w-none">
                    <PortableText value={project.description} />
                  </div>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
                        >
                          <Tag className="w-3 h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors group/link"
                      >
                        <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors group/link"
                      >
                        <Globe className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                        <span>Live Demo</span>
                      </a>
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