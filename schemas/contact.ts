export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Current Status',
      type: 'string',
      options: {
        list: [
          { title: 'Open to opportunities', value: 'open' },
          { title: 'Not currently available', value: 'closed' },
          { title: 'Open to freelance', value: 'freelance' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'availabilityDetails',
      title: 'Availability Details',
      type: 'text',
      description: 'Additional details about your availability or preferences',
    },
  ],
} 