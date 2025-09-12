// collections/categories.ts

import type { CollectionConfig } from "payload";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "createdAt"],
  },
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Category Name",
      type: "text",
      required: true,
      localized: true, // Enable translation
    },
    {
      name: "slug",
      type: "text",
      required: false,
      admin: {
        placeholder: "auto-generated if left blank",
      },
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
      required: false,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "landscape_image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "siteKey",
      type: "text",
      required: false,
      admin: {
        position: "sidebar",
        description:
          "Optional site identifier if you want to group categories by site",
      },
    },
  ],
  timestamps: true,
};

export default Categories;
