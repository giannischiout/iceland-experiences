// collections/cars.ts

import type { CollectionConfig } from "payload";

const Cars: CollectionConfig = {
  slug: "cars",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "brand", "category", "price", "createdAt"],
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

    // Basic Info
    {
      name: "name",
      label: "name",
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
      name: "seats",
      type: "number",
      min: 1,
      label: "Seating Capacity",
    },
    {
      name: "sleepingCapacity",
      type: "number",
      min: 1,
      label: "Sleeping Capacity",
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
