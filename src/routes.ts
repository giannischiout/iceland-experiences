export type NavItem = {
  id: string;
  label: string;
  path: string;
};

export const navData = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "rv-models",
    label: "RV Models",
    path: "/rv-models",
  },
  {
    id: "rental-location",
    label: "Rental Location",
    path: "/rental-location",
  },
  {
    id: "road-trip",
    label: "Road Trips",
    path: "/road-trips",
  },
  {
    id: "adventure-cars",
    label: "Adventure Cars",
    path: "/adventure-cars",
  },
];
