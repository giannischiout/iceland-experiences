import type { GlobalConfig } from "payload";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  label: "Site Navigation",
  fields: [
    {
      name: "vehicles",
      type: "group",
      fields: [
        {
          name: "categories",
          type: "relationship",
          relationTo: "categories",
          hasMany: true,
          minRows: 1,
        },

        {
          name: "bestSellingVehicles",
          type: "relationship",
          relationTo: "vehicles",
          hasMany: true,
          minRows: 1,
        },
      ],
    },
    {
      name: "trip",
      type: "group",
      fields: [
        {
          name: "posts",
          type: "relationship",
          relationTo: "posts",
          hasMany: true,
          minRows: 1,
          filterOptions: () => {
            return {
              category: {
                equals: "68acbe7e0badfc5fbcabd9f3",
              },
            };
          },
        },
      ],
    },
  ],
};
