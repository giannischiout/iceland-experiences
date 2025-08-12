// collections/features.ts

import type { CollectionConfig } from "payload";

const Features: CollectionConfig = {
  slug: "features",
  labels: {
    singular: "Feature",
    plural: "Features",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug"],
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
      required: true,
      unique: true,
      admin: {
        placeholder: "auto-generated or manually entered",
      },
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
      required: false,
    },
    {
      name: "icon",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
};

export default Features;
