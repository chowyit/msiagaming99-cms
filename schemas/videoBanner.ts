export default {
  name: 'videoBanner',
  title: 'Video Banner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'mux.video',
    },
  ],
}
