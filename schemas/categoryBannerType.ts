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
      name: 'games',
      title: 'Games',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(8),
    },
  ],
}
