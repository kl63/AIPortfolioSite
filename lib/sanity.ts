import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const token = process.env.SANITY_API_TOKEN

if (!projectId || !dataset || !apiVersion) {
  throw new Error('Required environment variables are not set')
}

// Create clients for different use cases
// Read-only client (public)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` if you want to ensure fresh data
})

// Read-write client (protected)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // We don't want to cache writes
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
} 