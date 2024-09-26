import {defineField, defineType} from 'sanity'

export const sucessType = defineType({
  name: 'sucess',
  title: 'sucess',
  type: 'document',
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the post",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title:'Image',
    }),
  
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text'
    }),
   
    
  ],
})