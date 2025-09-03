import { create } from "zustand";
import dayjs from "dayjs";
import { locations, timeOptions } from "@/_mockup";
import type { DateRange } from "react-day-picker";

export enum POPOVERS {
  pickup = "pickup",
  dropoff = "dropoff",
  pickupTime = "pickupTime",
  dropoffTime = "dropoffTime",
  dateRange = "dateRange",
}

type Location = (typeof locations)[number];
type TimeOption = (typeof timeOptions)[number];

type FiltersState = {
  pickup: Location;
  dropoff: Location;
  pickupTime: TimeOption;
  dropoffTime: TimeOption;
  range: {
    from: DateRange["from"] | null;
    to: DateRange["to"] | null;
  };
  openPopover: PopoverKey | null;
  dayPickerMounted: false;
};

export type PopoverKey = keyof typeof POPOVERS; // "pickup" | "returnPickup" | ...

type FiltersActions = {
  setField: <K extends keyof FiltersState>(
    key: K,
    value: FiltersState[K],
  ) => void;
  reset: () => void;
  onToggle: (popover: PopoverKey | null) => void;
  onClose: (key: PopoverKey) => void;
  setDateField: (range: DateRange) => void;
};

type FiltersStore = FiltersState & FiltersActions;

export const createFiltersStore = (initial?: Partial<FiltersState>) =>
  create<FiltersStore>((set, get) => ({
    dayPickerMounted: false,
    pickup: initial?.pickup || locations[0],
    dropoff: initial?.dropoff || locations[1],
    pickupTime: initial?.pickupTime || timeOptions[0],
    dropoffTime: initial?.dropoffTime || timeOptions[1],
    range: { from: null, to: null },
    openPopover: null,
    setField: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value,
      })),
    setDateField: (newRange) => {
      // if (!newRange) return;
      const normalized = {
        from: newRange.from ?? null,
        // to: newRange.to && newRange.from !== newRange.to ? newRange.to : null,
        to: newRange.to,
      };

      set((state) => ({
        ...state,
        range: normalized,
      }));
      const { range } = get();

      // if (range.from && range.to) {
      //   setTimeout(() => {
      //     set((state) => ({
      //       ...state,
      //       openPopover: null,
      //     }));
      //   }, 300); // 300ms delay
      // }
    },
    reset: () =>
      set({
        pickup: initial?.pickup || locations[0],
        dropoff: initial?.dropoff || locations[1],
        pickupTime: initial?.pickupTime || timeOptions[0],
        dropoffTime: initial?.dropoffTime || timeOptions[1],
        range: {
          from: dayjs().toDate(),
          to: dayjs().add(1, "day").toDate(),
        },
        openPopover: null,
      }),
    onClose: (key) =>
      set((state) => ({
        ...state,
        openPopover: key
          ? state.openPopover === key
            ? null
            : state.openPopover
          : null,
      })),
    onToggle: (popover) =>
      set((state) => ({
        ...state,
        openPopover: state.openPopover === popover ? null : popover,
      })),
  }));

export const useFilterStore = createFiltersStore();
