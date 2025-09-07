import type { CollectionConfig } from "payload";

export const PickupLocations: CollectionConfig = {
  slug: "pickup-locations",
  labels: {
    singular: "Pickup Location",
    plural: "Pickup Locations",
  },
  access: {
    read: (): boolean => true,
    create: (): boolean => false,
    update: (): boolean => false,
    delete: (): boolean => false,
  },
  admin: {
    useAsTitle: "label",
    group: "Booking Filters Options", // 👈 groups it under Booking Filters in sidebar
  },
  fields: [
    {
      name: "label",
      type: "text",
      label: "Label",
      required: true,
    },
    {
      name: "icon",
      type: "select",
      label: "Icon",
      options: [
        { label: "Airport", value: "airport" },
        { label: "Bus Stop", value: "busstop" },
        { label: "Area", value: "area" },
      ],
      required: true,
    },
  ],
};
