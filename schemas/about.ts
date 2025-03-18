export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
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
      name: "heroImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
  ],
} 