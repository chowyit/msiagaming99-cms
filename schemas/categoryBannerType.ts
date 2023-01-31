export default {
  name: 'categoryBannerType',
  title: 'Category Banner Type',
  type: 'document',
  fields: [
    {
      name: 'typeName',
      title: 'Game Type Name',
      type: 'string',
    },
    {
      name: 'spotlightA',
      title: 'Spotlight 1',
      type: 'reference',
      to: {type: 'product'},
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'spotlightB',
      title: 'Spotlight 2',
      type: 'reference',
      to: {type: 'product'},
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'games',
      title: 'Games',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(8),
    },
  ],
}
