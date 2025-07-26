import { MdDirectionsBus, MdLocalAirport } from "react-icons/md";
import { HiMiniMapPin } from "react-icons/hi2";

export type PickupIconType = "airport" | "busstop" | "area";

export type PickupLocation = {
  value: string;
  label: string;
  icon: PickupIconType;
};

export const locations: PickupLocation[] = [
  {
    value: "1",
    label: "Keflavík International Airport (KEF)",
    icon: "airport",
  },
  { value: "2", label: "Reykjavík Domestic Airport (RKV)", icon: "airport" },

  { value: "3", label: "Main Bus Stop - Reykjavík", icon: "busstop" },
  { value: "4", label: "Bus Stop - Akureyri Central", icon: "busstop" },
  { value: "5", label: "Bus Stop - Selfoss Town Center", icon: "busstop" },

  { value: "6", label: "Reykjavík Downtown", icon: "area" },
  { value: "7", label: "Selfoss", icon: "area" },
  { value: "8", label: "Höfn", icon: "area" },
];

export const pickupIcons = {
  airport: <MdLocalAirport className="text-primary font-bold" size={22} />,
  busstop: <MdDirectionsBus className="text-primary font-bold" size={22} />,
  area: <HiMiniMapPin className="text-primary font-bold" size={22} />,
};
export const timeOptions = [
  {
    value: "12:00",
    label: "12:00 AM",
  },
  {
    value: "12:30",
    label: "12:30 AM",
  },
  {
    value: "13:00",
    label: "13:00 AM",
  },
  {
    value: "13:30",
    label: "13:30 AM",
  },
];
