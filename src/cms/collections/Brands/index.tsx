// collections/brands.ts

import type { CollectionConfig } from "payload";

const Brands: CollectionConfig = {
  slug: "brands",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "createdAt"],
  },
  labels: {
    singular: "Brand",
    plural: "Brands",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      required: false,
      admin: {
        placeholder: "Auto-generated from name",
      },
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
      required: false,
    },
    {
      name: "logo",
      label: "Brand Logo",
      type: "upload",
      relationTo: "media", // Assumes you have a media collection
      required: false,
    },
    {
      name: "siteKey",
      type: "text",
      required: false,
      admin: {
        position: "sidebar",
        description: "Optional identifier to filter brands per site.",
      },
    },
  ],
  timestamps: true,
};

export default Brands;
