export default {
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "ctaText",
      title: "Call to Action Text",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "ctaLink",
      title: "Call to Action Link",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
} 