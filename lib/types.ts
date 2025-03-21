import { PortableTextBlock } from '@portabletext/types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Experience {
  _id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  location: string
  description: PortableTextBlock[]
  technologies?: string[]
  logo?: SanityImageSource
}

export interface Project {
  _id: string
  title: string
  description: PortableTextBlock[]
  technologies: string[]
  image?: SanityImageSource
  liveUrl?: string
  githubUrl?: string
  completedDate: string
  status?: 'Completed' | 'In Progress' | 'Planned'
}

export interface About {
  _id: string
  title: string
  bio: PortableTextBlock[]
  image?: SanityImageSource
}

export interface Skill {
  _id: string
  name: string
  category: string
  level: number
  icon?: string
  technologies?: string[]
}

export interface Contact {
  _id: string
  email: string
  githubUrl: string
  linkedinUrl: string
  location: string
  status: 'open' | 'closed' | 'freelance'
  availabilityDetails: string
}

export interface Profile {
  _id: string
  name: string
  role: string
  company?: string
  bio: PortableTextBlock[]
  avatar?: SanityImageSource
  location: string
  email: string
  githubUrl: string
  linkedinUrl: string
} 