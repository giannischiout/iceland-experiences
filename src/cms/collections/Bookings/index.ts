import type { CollectionConfig } from "payload";

const Bookings: CollectionConfig = {
  slug: "bookings",
  labels: {
    singular: "Booking",
    plural: "Bookings",
  },
  admin: {
    useAsTitle: "bookingNumber",
    defaultColumns: ["bookingNumber", "user", "startDate", "endDate", "status"],
  },
  fields: [
    {
      name: "bookingNumber",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "Unique booking identifier (auto-generate in your app)",
      },
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        description: "User who made the booking",
      },
    },
    {
      name: "vehicle",
      type: "relationship",
      relationTo: "vehicles",
      required: false,
      admin: {
        description: "Vehicle booked (if applicable)",
      },
    },
    {
      name: "tent",
      type: "relationship",
      relationTo: "tents",
      required: false,
      admin: {
        description: "Tent booked (if applicable)",
      },
    },
    {
      name: "startDate",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "endDate",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Confirmed", value: "confirmed" },
        { label: "Cancelled", value: "cancelled" },
      ],
    },
    {
      name: "totalPrice",
      type: "number",
      required: false,
      admin: {
        description: "Total price for the booking (calculated externally)",
      },
    },
    {
      name: "notes",
      type: "textarea",
      required: false,
    },
  ],
};

export default Bookings;
