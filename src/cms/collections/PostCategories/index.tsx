import type { CollectionConfig } from "payload";

export const PostsCategories: CollectionConfig = {
  slug: "postCategories",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedAt"],
    group: "Posts",
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
    },
    // Optional SEO
    {
      name: "meta",
      type: "group",
      fields: [
        { name: "metaTitle", type: "text" },
        { name: "metaDescription", type: "textarea" },
      ],
    },
  ],
};
