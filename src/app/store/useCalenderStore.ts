import create from "zustand";
import { Shape } from "@components/Spinner/ FullScreenSpinner";

interface Option {
  label: string;
  value: string;
}

interface CalenderState {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
  returnDate: Date | null;
  setReturnDate: (date: Date) => void;
  seatClass: string;
  setSeatClass: (seatClass: string) => void;
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  setPassengers: (passengers: {
    adults: number;
    children: number;
    infants: number;
  }) => void;
  spinning: boolean;
  setSpinning: (spinning: boolean) => void;
  spinnerShape: Shape;
  setSpinnerShape: (shape: Shape) => void;
  buttonDisabled: boolean;
  setButtonDisabled: (disabled: boolean) => void;
  showToast: boolean;
  setShowToast: (show: boolean) => void;
  toastMessage: string;
  setToastMessage: (message: string) => void;
  selectOptions: string[];
  setSelectOptions: (options: string[]) => void;
  selectColor: "red" | "blue" | "green" | "gray";
  setSelectColor: (color: "red" | "blue" | "green" | "gray") => void;
  selectValue: string;
  setSelectValue: (value: string) => void;
  autocompleteOptions: Option[]; // State for Autocomplete options
  setAutocompleteOptions: (options: Option[]) => void;
  autocompletePlaceholder: string; // State for Autocomplete placeholder
  setAutocompletePlaceholder: (placeholder: string) => void;
}

export const useCalenderStore = create<CalenderState>((set) => ({
  selectedDate: null,
  returnDate: null,
  seatClass: "Economy",
  passengers: { adults: 1, children: 0, infants: 0 },

  setSelectedDate: (date: Date) => set({ selectedDate: date }),
  setReturnDate: (date: Date) => set({ returnDate: date }),
  setSeatClass: (seatClass: string) => set({ seatClass }),
  setPassengers: (passengers) => set({ passengers }),

  spinning: false,
  setSpinning: (spinning: boolean) => set({ spinning }),
  spinnerShape: "Basic",
  setSpinnerShape: (shape: Shape) => set({ spinnerShape: shape }),

  buttonDisabled: false,
  setButtonDisabled: (disabled: boolean) => set({ buttonDisabled: disabled }),

  showToast: false,
  setShowToast: (show: boolean) => set({ showToast: show }),
  toastMessage: "",
  setToastMessage: (message: string) => set({ toastMessage: message }),

  selectOptions: ["Option 1", "Option 2", "Option 3"],
  setSelectOptions: (options: string[]) => set({ selectOptions: options }),

  selectColor: "gray",
  setSelectColor: (color: "red" | "blue" | "green" | "gray") =>
    set({ selectColor: color }),

  selectValue: "",
  setSelectValue: (value: string) => set({ selectValue: value }),

  autocompleteOptions: [{ label: "Option 1", value: "option1" }],
  setAutocompleteOptions: (options: Option[]) =>
    set({ autocompleteOptions: options }),

  autocompletePlaceholder: "Search for Components",
  setAutocompletePlaceholder: (placeholder: string) =>
    set({ autocompletePlaceholder: placeholder }),
}));
