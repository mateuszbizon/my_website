import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (rule) => rule.required()
        })
      ]
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
        name: "subpagesAmount",
        type: "number"
    }),
    defineField({
        name: "daysMakingAmount",
        type: "number"
    }),
    defineField({
        name: "websiteLink",
        type: "string"
    }),
    defineField({
        name: "websiteName",
        type: "string"
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title} = selection
      return {...selection, subtitle: title && `by me`}
    },
  },
})