import type { Block } from "payload";

export const TextItem: Block = {
  slug: "textItem",
  labels: { singular: "Text Item", plural: "Text Items" },
  fields: [
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
  ],
};

export const LinkItem: Block = {
  slug: "linkItem",
  labels: { singular: "Link Item", plural: "Link Items" },
  fields: [
    { name: "label", type: "text", required: true },
    { name: "url", type: "text", required: true },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};

export const ButtonItem: Block = {
  slug: "buttonItem",
  labels: { singular: "Button", plural: "Buttons" },
  fields: [
    { name: "label", type: "text", required: true },
    { name: "url", type: "text", required: true },
    {
      name: "style",
      type: "select",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
      ],
      defaultValue: "primary",
    },
  ],
};

export const MultiRelationshipItem: Block = {
  slug: "multiRelationshipItem",
  labels: { singular: "Multi Relationship", plural: "Multi Relationships" },
  fields: [
    {
      name: "relationType",
      type: "select",
      options: [
        { label: "Vehicles", value: "vehicles" },
        { label: "Categories", value: "categories" },
      ],
      defaultValue: "vehicles",
      required: true,
    },
    {
      name: "items",
      type: "relationship",
      relationTo: ["vehicles", "categories"], // can relate to either collection
      hasMany: true,
      required: true,
      admin: {
        condition: (data) => !!data.relationType,
      },
    },
  ],
};
