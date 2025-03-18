export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Programming Languages", value: "programming" },
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Database", value: "database" },
          { title: "Tools", value: "tools" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Skill Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "technologies",
      title: "Related Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
} 