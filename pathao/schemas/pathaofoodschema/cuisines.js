export default {
    name: 'cuisines',
    title: 'Cuisines Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Cuisines name',
        type: 'string',
        validation: (Rule) => Rule.required(), 
      },
      {
        name: 'image',
        title: 'Image of Cuisines',
        type: 'image',
      },
    ],
  }
  