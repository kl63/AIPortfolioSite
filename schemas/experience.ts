import { Briefcase } from "lucide-react"

export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date",
      type: "datetime",
      hidden: ({ document }: any) => document?.current,
    },
    {
      name: "current",
      title: "Current Position",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "position",
      subtitle: "company",
    },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return {
        title,
        subtitle,
        media: Briefcase,
      }
    },
  },
} 