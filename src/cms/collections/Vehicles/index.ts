import type { CollectionConfig } from "payload";

const Vehicles: CollectionConfig = {
  slug: "vehicles",
  labels: {
    singular: "Vehicle",
    plural: "Vehicles",
  },
  admin: {
    useAsTitle: "model",
    defaultColumns: ["model", "stock", "basePricePerDay"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "gallery",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      required: false,
    },
    {
      name: "brand",
      type: "relationship",
      relationTo: "brands",
      required: true,
      admin: {
        description: "Select the brand/manufacturer",
      },
    },
    {
      name: "model",
      type: "text",
      required: true,
      localized: true,
      admin: {
        description: "Model name (e.g., Land Cruiser Prado)",
      },
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
      name: "category",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "features",
      type: "relationship",
      relationTo: "features",
      hasMany: true,
      admin: {
        description: "Features included with this vehicle",
      },
    },
    {
      name: "includedTents",
      type: "relationship",
      relationTo: "tents",
      hasMany: true,
      admin: {
        description: "Tents built-in / included with this vehicle",
      },
    },
    {
      name: "optionalAddOns",
      type: "relationship",
      relationTo: "addons",
      hasMany: true,
      admin: {
        description: "Optional add-ons available for this vehicle",
      },
    },
    {
      name: "basePricePerDay",
      type: "number",
      required: true,
      admin: {
        description: "Base rental price per day for this vehicle",
      },
    },
    {
      name: "stock",
      type: "number",
      required: true,
      defaultValue: 1,
      admin: {
        description: "Number of vehicles available with these specs",
      },
    },
    {
      name: "sleeps",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        description: "Number people the vehicle can accommodate",
      },
    },
    {
      name: "seats",
      type: "number",
      required: true,
      defaultValue: 5,
    },
    {
      name: "bookings",
      type: "relationship",
      relationTo: "bookings",
      hasMany: true,
      admin: {
        description: "Bookings for this vehicle",
      },
    },
  ],
};

export default Vehicles;
