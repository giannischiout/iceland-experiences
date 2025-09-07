import { create } from "zustand";
import { timeOptions } from "@/_mockup";
import type { DateRange } from "react-day-picker";
import type { PickupLocation } from "@/payload-types";

export enum POPOVERS {
  pickup = "pickup",
  dropoff = "dropoff",
  pickupTime = "pickupTime",
  dropoffTime = "dropoffTime",
  dateRange = "dateRange",
}

type TimeOption = (typeof timeOptions)[number];
export type PopoverKey = keyof typeof POPOVERS;

type FiltersState = {
  locations: PickupLocation[];
  pickup: PickupLocation | null;
  dropoff: PickupLocation | null;
  pickupTime: TimeOption;
  dropoffTime: TimeOption;
  range: {
    from: DateRange["from"] | null;
    to: DateRange["to"] | null;
  };
  openPopover: PopoverKey | null;
  dayPickerMounted: boolean;
  // mobile only:
  currentScreen: "callToAction" | "filters" | "summary";
  // isMobileOpen: boolean;
};

type FiltersActions = {
  setField: (key: PopoverKey, value: any) => void;
  onToggle: (popover: PopoverKey | null) => void;
  onOpen: (popover: PopoverKey) => void;
  onClose: (key: PopoverKey) => void;
  setDateField: (range: DateRange) => void;
  onInitLocations: (locations: PickupLocation[]) => void;
  // mobile only:
  setCurrentScreen: (screen: FiltersState["currentScreen"]) => void;
};

type FiltersStore = FiltersState & FiltersActions;

export const createFiltersStore = () =>
  create<FiltersStore>((set) => ({
    locations: [],
    // isMobileOpen: false,
    dayPickerMounted: false,
    pickup: null,
    dropoff: null,
    pickupTime: timeOptions[0],
    dropoffTime: timeOptions[1],
    range: { from: null, to: null },
    openPopover: null,
    setField: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value,
      })),
    setDateField: (newRange) => {
      const normalized = {
        from: newRange.from ?? null,
        to: newRange.to,
      };

      set((state) => ({
        ...state,
        range: normalized,
      }));
    },
    onClose: (key) =>
      set((state) => ({
        ...state,
        openPopover: key
          ? state.openPopover === key
            ? null
            : state.openPopover
          : null,
      })),
    onOpen: (key) =>
      set((state) => ({
        ...state,
        openPopover: key,
      })),
    onToggle: (popover) =>
      set((state) => ({
        ...state,
        openPopover: state.openPopover === popover ? null : popover,
      })),

    onInitLocations: (loc) => {
      set((state) => ({
        ...state,
        locations: loc,
        pickup: loc[0],
        dropoff: loc[0],
      }));
    },
    // MOBILE:
    currentScreen: "callToAction",
    setCurrentScreen: (screen) => {
      set({
        currentScreen: screen,
      });
    },
  }));

export const useFilterStore = createFiltersStore();
