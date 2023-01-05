export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'topBanners',
      title: 'Top Banners',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'topBanner'}]}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'categoryBanners',
      title: 'Category Banners',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'categoryBanner'}]}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'videoBanner',
      title: 'Video Banner',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'productVideo'}]}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
