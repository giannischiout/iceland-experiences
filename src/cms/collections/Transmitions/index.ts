import type { CollectionConfig } from "payload";

export const Transmissions: CollectionConfig = {
  slug: "transmissions",
  admin: {
    useAsTitle: "label",
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "tagline",
      type: "text",
      required: true,
    },
  ],
};
