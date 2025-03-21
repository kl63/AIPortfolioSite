import { Briefcase } from "lucide-react"
import { defineField, defineType } from 'sanity'

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "datetime",
      hidden: ({ document }) => Boolean(document?.current),
    }),
    defineField({
      name: "current",
      title: "Current Position",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: 'position',
      subtitle: 'company',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title || 'Untitled',
        subtitle: subtitle || '',
        media: Briefcase,
      }
    },
  },
}) 