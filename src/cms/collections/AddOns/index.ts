import type { CollectionConfig } from "payload";

const AddOns: CollectionConfig = {
  slug: "addons",
  labels: { singular: "Add-on", plural: "Add-ons" },
  admin: { useAsTitle: "name" },
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
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "basePrice",
      type: "number",
      required: false,
    },
  ],
};

export default AddOns;
