import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Handbags',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image'}],
    }),

    defineField({
      name: 'story',
      title: 'Product Story',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'price',
      title: 'Price (optional)',
      type: 'string',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
  },
})
