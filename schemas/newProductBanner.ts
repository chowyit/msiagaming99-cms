export default {
  name: 'productBanners',
  title: 'Product Banners',
  type: 'document',
  fields: [
    {
      name: 'newGames',
      title: 'New Games',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(10),
    },
  ],
}
