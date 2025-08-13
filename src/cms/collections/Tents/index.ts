import type { CollectionConfig } from "payload";

const Tents: CollectionConfig = {
  slug: "tents",
  labels: {
    singular: "Tent",
    plural: "Tents",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "type", "stock", "basePricePerDay"],
  },
  access: {
    read: () => true, // customize as needed
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
        placeholder: "auto-generated or manual",
      },
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "sleepingCapacity",
      type: "number",
      required: true,
      min: 1,
      admin: {
        description: "How many people can the tent sleep?",
      },
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Rooftop Tent", value: "rooftop" },
        { label: "Ground Tent", value: "ground" },
      ],
      defaultValue: "ground",
    },
    {
      name: "basePricePerDay",
      type: "number",
      required: true,
      admin: {
        description: "Price to rent the tent per day",
      },
    },
    {
      name: "stock",
      type: "number",
      required: true,
      defaultValue: 1,
      admin: {
        description: "How many tents of this model are available?",
      },
    },
    {
      name: "bookings",
      type: "relationship",
      relationTo: "bookings",
      hasMany: true,
      admin: {
        description: "Bookings that reserve this tent",
      },
    },
    {
      name: "gallery",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      required: false,
    },
  ],
};

export default Tents;
