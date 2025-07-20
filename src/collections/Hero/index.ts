import type {  GlobalConfig } from 'payload'




export const Hero: GlobalConfig = {
  slug: 'hero',
  access: {
    read: () => true,
  },
  fields: [

    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
    },
    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: false,
    },
  ],
}
