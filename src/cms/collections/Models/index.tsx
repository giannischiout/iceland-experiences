// collections/brands.ts
import type { CollectionBeforeValidateHook, CollectionConfig } from "payload";

const beforeValidateSlug: CollectionBeforeValidateHook = (args): string => {
  const { data } = args;
  if (data?.name.includes(" ")) {
    return data?.name.split(" ").join("_");
  }
  return data?.name;
};

const Models: CollectionConfig = {
  slug: "models",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "createdAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "brand",
      type: "relationship",
      relationTo: "brands",
      required: true,
    },
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
      hooks: {
        beforeValidate: [beforeValidateSlug],
      },
      admin: {
        placeholder: "Auto-generated from name",
      },
    },
    {
      name: "siteKey",
      type: "text",
      required: false,
      admin: {
        position: "sidebar",
        description: "Optional identifier to filter models per site.",
      },
    },
  ],
  timestamps: true,
};

export default Models;
