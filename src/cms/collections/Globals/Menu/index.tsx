// globals/menus.ts

import type { GlobalConfig } from "payload";
import { MenuCard } from "@/cms/collections/blocks/menu-card";

const Menus: GlobalConfig = {
  slug: "mainMenu",
  fields: [
    {
      name: "bookNowLink",
      type: "text",
      required: true,
    },
    {
      name: "menu",
      type: "blocks",
      blocks: [MenuCard],
    },
    {
      name: "menuItems",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
          admin: { readOnly: true },
        },
        {
          name: "megaMenu",
          type: "blocks",
          blocks: [
            {
              slug: "fourItemList",
              labels: { singular: "4-Item List", plural: "4-Item Lists" },
              fields: [
                {
                  name: "title",
                  type: "text",
                  required: true,
                },
                {
                  name: "items",
                  type: "relationship",
                  relationTo: ["cars", "categories", "brands"], // can select type dynamically
                  hasMany: true,
                  maxRows: 4,
                  admin: {
                    description: "Select up to 4 items to display",
                  },
                },
              ],
            },
            {
              slug: "imageWithLinks",
              labels: {
                singular: "Image with Links",
                plural: "Image with Links",
              },
              fields: [
                {
                  name: "image",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "links",
                  type: "array",
                  fields: [
                    {
                      name: "label",
                      type: "text",
                    },
                    {
                      name: "url",
                      type: "text",
                    },
                  ],
                  maxRows: 6,
                },
              ],
            },
            {
              slug: "categoryGrid",
              labels: { singular: "Category Grid", plural: "Category Grids" },
              fields: [
                {
                  name: "title",
                  type: "text",
                  required: true,
                },
                {
                  name: "categories",
                  type: "relationship",
                  relationTo: "categories",
                  hasMany: true,
                  maxRows: 8,
                },
              ],
            },
            // add more layouts here as needed
          ],
        },
      ],
    },
    {
      name: "ourCars",
      type: "group",
      fields: [
        {
          name: "categories",
          type: "relationship",
          relationTo: "categories",
          hasMany: true,
        },

        {
          name: "brands",
          type: "relationship",
          relationTo: "brands",
          hasMany: true,
        },
        {
          name: "transmissions",
          type: "relationship",
          relationTo: "transmissions",
          hasMany: true,
        },
      ],
    },
  ],
};

export default Menus;
