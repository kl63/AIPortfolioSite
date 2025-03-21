import { Home } from "lucide-react"
import { defineField, defineType } from 'sanity'

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "image",
          title: "Hero Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "skills",
      title: "Skills Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "projects",
      title: "Projects Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title || 'Home Page',
        media: Home,
      }
    },
  },
}) 