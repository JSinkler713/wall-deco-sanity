export default {
  name: "wallArt",
  title: "Wall Art",
  type: "document",
  fields: [
    {
      name: "wallArtImg",
      title: "Wall Art",
      type: "image"
    },
    {
      name: "credit",
      title: "Photographer",
      type: "string"
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    }
  ]
};
