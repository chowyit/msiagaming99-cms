export default {
  name: 'categoryBanner',
  title: 'Category Banner',
  type: 'document',
  fields: [
    {
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
    },
    {
      name: 'hasMenu',
      title: 'Has Menu?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'gameType',
      title: 'Game By Type',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'categoryBannerType'}]}],
      hidden: ({document}: any) => !document.hasMenu,
      validation: (Rule: {max: (arg0: number) => any; required: () => any}) => {
        Rule.max(8)
        Rule.required()
      },
    },
    {
      name: 'games',
      title: 'Games Array',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      hidden: ({document}: any) => document.hasMenu,
      validation: (Rule: {required: () => any}) => {
        Rule.required()
      },
    },
  ],
}
