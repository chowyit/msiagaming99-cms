export default {
  name: 'gameCategory',
  title: 'Game Category',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'id',
      title: 'Id',
      type: 'string',
      description: 'Please follow category name without space and Chinese Words',
    },
  ],
}
