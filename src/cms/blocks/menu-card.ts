import type { Block } from "payload";

export const MenuCard: Block = {
  slug: "menuCardImage",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      required: true,
    },
    {
      type: "checkbox",
      label: "Add Image",
      name: "withImage",
      admin: {
        description: "Add an image to the card",
      },
    },
    {
      type: "upload",
      relationTo: "media",
      name: "image",
      label: "image",
      required: false,
    },
  ],
};
