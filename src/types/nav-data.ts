export type NavItemType = "bookNow-popup" | "mega-menu" | "link";

export type NavChild = Record<string, any>;

export interface NavItem {
  id: string;
  label: string;
  type: NavItemType;
  href?: string;
  children?: NavChild;
}
