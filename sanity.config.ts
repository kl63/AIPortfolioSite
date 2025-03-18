import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schema } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio',
  projectId,
  dataset,
  apiVersion,
  basePath: '/studio',
  plugins: [deskTool()],
  schema,
}) 