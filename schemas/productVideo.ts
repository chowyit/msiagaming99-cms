export default {
  name: 'productVideo',
  title: 'Product Video',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'mux.video',
    },
  ],
}
