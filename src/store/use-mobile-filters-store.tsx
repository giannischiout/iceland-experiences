import { create } from "zustand";
import { timeOptions } from "@/_mockup";
import type { PickupLocation } from "@/payload-types";
import type { DateRange } from "react-day-picker";

type State = {
  locations: PickupLocation[];
  pickup: PickupLocation | null;
  dropoff: PickupLocation | null;

  range: {
    from: DateRange["from"] | null;
    to: DateRange["to"] | null;
  };
  // open: boolean;
  optionsScreen: "locations" | "dateRange" | "time" | null;
  currentScreen: "callToAction" | "filters" | "options";
};

type Actions = {
  // onToggle: () => void;
  // onClose: () => void;
  // onOpen: () => void;
  setCurrentScreen: (screen: State["currentScreen"]) => void;
  setOptionsScreen: (option: State["optionsScreen"]) => void;
};

type FiltersStore = State & Actions;

export const createMobileFiltersStore = () =>
  create<FiltersStore>((set, get) => ({
    pickup: null,
    dropoff: null,
    pickupTime: timeOptions[0],
    dropoffTime: timeOptions[1],
    range: { from: null, to: null },

    optionsScreen: null,
    setOptionsScreen: (option) => set({ optionsScreen: option }),
    currentScreen: "callToAction",
    setCurrentScreen: (screen) => {
      set({
        currentScreen: screen,
      });
    },
  }));

export const useMobileFilterStore = createMobileFiltersStore();
