// collections/cars.ts

import type { CollectionConfig } from "payload/types";

const Cars: CollectionConfig = {
  slug: "cars",
  admin: {
    useAsTitle: "model",
    defaultColumns: ["model", "brand", "category", "price", "createdAt"],
  },
  labels: {
    singular: "Car",
    plural: "Cars",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Associations
    {
      name: "brand",
      type: "relationship",
      relationTo: "brands",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },

    // Basic Info
    {
      name: "model",
      label: "Model Name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      required: false,
      admin: {
        placeholder: "Auto-generated from model",
      },
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
      required: false,
    },

    // Media
    {
      name: "images",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      required: false,
    },

    // Car Specs
    {
      name: "price",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "year",
      type: "number",
      required: true,
    },
    {
      name: "engine",
      type: "text",
      required: true,
    },
    {
      name: "horsepower",
      type: "number",
      required: true,
    },
    {
      name: "transmission",
      type: "select",
      required: true,
      options: ["Automatic", "Manual"],
    },
    {
      name: "fuelType",
      type: "select",
      required: true,
      options: ["Petrol", "Diesel", "Electric", "Hybrid"],
    },

    {
      name: "siteKey",
      type: "text",
      required: false,
    },
    {
      name: "available",
      type: "checkbox",
      defaultValue: true,
    },
  ],
  timestamps: true,
};

export default Cars;
