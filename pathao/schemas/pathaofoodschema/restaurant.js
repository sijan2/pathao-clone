

export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type:"string",
      title:"Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_descriptions",
      type:"string",
      title:"Short description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type:"image",
      title:"Image of the restaurant",
    },
    {
      name: "lat",
      type:"number",
      title:"Latitude of the restaurant",
    },
    {
      name: "long",
      type:"number",
      title:"Longitude of the restaurant",
    },
    {
      name: "discount",
      type:"string",
      title:"Discount offer",
    },
    {
      name: "delivery",
      type:"number",
      title:"Delivery fee",
    },
    {
      name: "address",
      type:"string",
      title:"Restaurant address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type:"number",
      title:"Enter a rating of (1-5) stars",
      validation: (Rule) => Rule
      .min(1)
      .max(5)
      .error("Please enter a rating between 1 and 5"),
    },
    {
      name: "type",
      title:"Category",
      validation: (Rule) => Rule.required(),
      type:"reference",
      to: [{ type: "categories" }],
    },
    {
      name: "genre",
      title:"Cuisines or Genre of the restaurant",
      validation: (Rule) => Rule.required(),
      type:"reference",
      to: [{ type: "cuisines" }],
    },
    {
      name: "dishes",
      title:"Dishes",
      type:"array",
      of: [{ type: "reference", to:[{ type: "dish"}] }],

    },
  ]
};
