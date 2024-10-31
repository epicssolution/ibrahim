import { defineField, defineType } from 'sanity';

export const aiType = defineType({
  name: 'AI', // Unique schema name
  title: 'AI Post', // Display title in Sanity Studio
  type: 'document', // Declares it as a document schema
  fields: [
    // Post title field
    defineField({
      name: 'title',
      type: 'string',
      title: 'Post Title', // Descriptive label for the title field
      description: 'Enter a compelling title for the AI-related post.', // Guides the user on what to input
      validation: (Rule) => Rule.required().min(10).max(100), // Title is required, with a character limit
    }),

    // Slug for URL generation
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug', // Descriptive label for the slug
      description: 'Automatically generate the slug from the title for URL purposes.', // Explains the slug field
      options: {
        source: 'title', // Automatically generates slug from the title
        maxLength: 96, // Slug length limit
      },
      validation: (Rule) => Rule.required(), // Slug is required
    }),

    // Featured image with alt text
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      description: 'Upload a relevant featured image for the AI post.', // Explains the image's purpose
      options: {
        hotspot: true, // Allows image cropping
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text', // Alt text for accessibility and SEO
          description: 'Describe the image for visually impaired users and better SEO performance.',
          validation: (Rule) => Rule.required().max(100), // Alt text is required, with a character limit
        }),
      ],
    }),

    // Short description field
    defineField({
      title: 'Short Description',
      name: 'description',
      type: 'text',
      description: 'Provide a brief summary of the post. This will be used in post previews.', // Guides the user
      validation: (Rule) => Rule.required().min(50).max(200), // Character limit validation
    }),

    // Main content block
    defineField({
      title: 'Main Content',
      name: 'content',
      type: 'array',
      description: 'Add the main content of the post here. You can format it using headings, paragraphs, etc.', // Describes the purpose
      of: [{ type: 'block' }], // Allows rich text formatting
    }),

    // Tags for categorization
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Add tags to categorize this post. Tags improve discoverability.', // Describes the importance of tags
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', // Displays tags in a tag-style layout
      },
    }),

    // External link field
    defineField({
      title: 'External Link',
      name: 'href',
      type: 'url',
      description: 'Add a link to relevant external resources or articles (optional).', // Guides the user on adding a relevant link
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'], // Ensures the link follows a valid scheme
        }),
    }),

    // Publication date and time
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      description: 'Set the publication date and time for the post.', // Guides the user on scheduling the post
    }),
  ],
});
