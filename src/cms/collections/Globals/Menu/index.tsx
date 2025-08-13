// globals/menus.ts

import type { GlobalConfig } from "payload";

const Menus: GlobalConfig = {
  slug: "mainMenu",
  fields: [
    {
      name: "bookNowLink",
      type: "text",
      required: true,
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
      ],
    },
  ],
};

export default Menus;
