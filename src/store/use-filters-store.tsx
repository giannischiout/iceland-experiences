import { create } from "zustand";
import dayjs from "dayjs";
import { locations, timeOptions } from "@/_mockup";

export enum POPOVERS {
  pickup = "pickup",
  dropoff = "dropoff",
  pickupTime = "pickupTime",
  dropoffTime = "dropoffTime",
  dateRange = "dateRange",
}

type DateRange = { from: Date; to: Date };
type Location = (typeof locations)[number];
type TimeOption = (typeof timeOptions)[number];

type FiltersState = {
  pickup: Location;
  dropoff: Location;
  pickupTime: TimeOption;
  dropoffTime: TimeOption;
  range: DateRange;
  openPopover: PopoverKey | null;
};
type PopoverKey = keyof typeof POPOVERS; // "pickup" | "returnPickup" | ...

type FiltersActions = {
  setField: <K extends keyof FiltersState>(
    key: K,
    value: FiltersState[K],
  ) => void;
  reset: () => void;
  onToggle: (popover: PopoverKey | null) => void;
  onClose: (key: PopoverKey) => void;
  setDateField: (dateRange: DateRange) => void;
};

type FiltersStore = FiltersState & FiltersActions;

export const createFiltersStore = (initial?: Partial<FiltersState>) =>
  create<FiltersStore>((set) => ({
    pickup: initial?.pickup || locations[0],
    dropoff: initial?.dropoff || locations[1],
    pickupTime: initial?.pickupTime || timeOptions[0],
    dropoffTime: initial?.dropoffTime || timeOptions[1],
    range: initial?.range || {
      from: dayjs().toDate(),
      to: dayjs().add(1, "day").toDate(),
    },
    openPopover: null,
    setField: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value,
      })),
    setDateField: (dateRange) => {
      set((state) => {
        return {
          ...state,
          range: dateRange,
        };
      });
    },
    reset: () =>
      set({
        pickup: initial?.pickup || locations[0],
        dropoff: initial?.dropoff || locations[1],
        pickupTime: initial?.pickupTime || timeOptions[0],
        dropoffTime: initial?.dropoffTime || timeOptions[1],
        range: initial?.range || {
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
