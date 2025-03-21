import { Code2 } from "lucide-react"
import { defineField, defineType } from 'sanity'

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
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
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    }),
    defineField({
      name: "completedDate",
      title: "Completed Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "Completed" },
          { title: "In Progress", value: "In Progress" },
          { title: "Planned", value: "Planned" },
        ],
      },
      initialValue: "Completed",
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title || 'Untitled Project',
        subtitle: subtitle || 'Completed',
        media: Code2,
      }
    },
  },
}) 