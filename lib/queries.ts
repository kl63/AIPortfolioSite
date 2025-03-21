import { createClient } from "next-sanity"
import { groq } from "next-sanity"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-21",
  useCdn: false,
})

export async function getHome() {
  return client.fetch(
    groq`*[_type == "home"][0] {
      _id,
      hero {
        title,
        subtitle,
        image
      },
      about {
        title,
        description
      },
      skills {
        title,
        description
      },
      projects {
        title,
        description
      },
      contact {
        title,
        description
      }
    }`
  )
}

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"][0] {
      _id,
      name,
      bio,
      image {
        url
      },
      githubUrl,
      linkedinUrl,
      email
    }`
  )
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(order asc) {
      _id,
      title,
      description,
      image {
        url
      },
      technologies,
      githubUrl,
      liveUrl
    }`
  )
}

export async function getExperiences() {
  return client.fetch(
    groq`*[_type == "experience"] | order(startDate desc) {
      _id,
      position,
      company,
      startDate,
      endDate,
      current,
      description,
      technologies
    }`
  )
}

export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skill"] {
      _id,
      category,
      items
    }`
  )
} 