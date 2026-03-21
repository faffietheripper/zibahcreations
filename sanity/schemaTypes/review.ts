import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'review',
  title: 'Reviews',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'message',
      title: 'Review Message',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),

    // 🔥 THIS LINKS TO PRODUCT
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{type: 'product'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
