import type { Brand, Category, Feature } from "@/payload-types";

type ICategory = Category & { count: number };

export type IFilters = {
  categories: ICategory[];
  brands: Brand[];
  features: Feature[];
  error?: string | null;
};
