// collections/tents.ts

import type { CollectionConfig } from "payload";

const Tents: CollectionConfig = {
  slug: "tents",
  labels: {
    singular: "Tent Type",
    plural: "Tent Types",
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
        placeholder: "e.g. rooftop, ground-tent, awning",
      },
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
      required: false,
    },
    {
      name: "sleeps",
      type: "number",
      required: true,
      min: 1,
      admin: {
        description: "Number of people this tent can sleep",
      },
    },
    {
      name: "icon",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
};

export default Tents;
