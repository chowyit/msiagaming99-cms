export default {
  name: 'topBanner',
  title: 'Homepage Top Banner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Top Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
