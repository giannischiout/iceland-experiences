export type NavItem = {
  id: string;
  label: string;
  path?: string;
};

export const navData = [
  {
    id: "book_now",
    label: "Book now",
    path: "/",
  },
  {
    id: "vehicles",
    label: "Vehicles",
    megaMenu: true,
  },
  {
    id: "road-trip",
    label: "Road Trips",
    megaMenu: true,
  },
  {
    id: "adventure-cars",
    label: "Adventure Cars",
    megaMenu: true,
  },
];
