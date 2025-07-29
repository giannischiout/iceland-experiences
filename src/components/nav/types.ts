import type { navData } from "@/routes";

export type ActiveState = (typeof navData)[number]["id"] | null;
