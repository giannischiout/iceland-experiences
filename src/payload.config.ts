// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { Users } from "@/cms/collections/Users";
import { Media } from "@/cms/collections/Media";
import Categories from "@/cms/collections/Gategories";
import Brands from "@/cms/collections/Brands";
import AddOns from "@/cms/collections/AddOns";
import Features from "@/cms/collections/Features";
import Tents from "@/cms/collections/Tents";
import Bookings from "@/cms/collections/Bookings";
import Vehicles from "@/cms/collections/Vehicles";
import { initializeData } from "../seed";
import { getFilters } from "@/cms/endpoints/filters";
import { Navigation } from "@/cms/collections/Globals/Navigation";
import { PostsCategories } from "@/cms/collections/PostCategories";
import { Posts } from "@/cms/collections/Posts";
import { PickupLocations } from "@/cms/collections/BookingFIlters/pickup-locations";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      {
        label: "English",
        code: "en",
      },
      {
        label: "German",
        code: "de",
      },
      {
        label: "Spanish",
        code: "es",
      },
    ],
    defaultLocale: "en",
    fallback: true,
  },
  globals: [Navigation],
  collections: [
    Users,
    Media,
    Categories,
    Vehicles,
    Brands,
    Bookings,
    AddOns,
    Features,
    Tents,
    //
    Posts,
    PostsCategories,
    // Booking Filters:
    PickupLocations,
  ],
  endpoints: [
    {
      path: "/getFilters",
      method: "get",
      handler: getFilters,
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  onInit: async (payload) => {
    if (process.env.SEED === "true") {
      await initializeData(payload);
    }
  },
});
