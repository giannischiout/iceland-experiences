import type { CollectionConfig, FieldHookArgs } from "payload";

const beforeValidateSlug = async ({
  data,
}: FieldHookArgs): Promise<typeof data> => {
  if (data?.filename && !data.slug) {
    return data.filename
      .toLowerCase()
      .trim()
      .replace(/\.(jpg|jpeg|png|webp|gif|svg|bmp|tiff|avif)$/i, "") // remove extension
      .replace(/[^a-z0-9]+/g, "-") // replace spaces and special characters with dashes
      .replace(/^-+|-+$/g, ""); // remove leading/trailing dashes
  }
  return data?.slug ?? "";
};

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      // required: true,
      hooks: {
        beforeValidate: [beforeValidateSlug],
      },
    },
  ],
  upload: true,
};
