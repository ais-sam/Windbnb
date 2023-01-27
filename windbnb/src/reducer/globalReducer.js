import { types } from "./types";

export const initialStates = {
  isModal: false,
  isCities: false,
  isGuestFilters: false,
  choosedLocation: "Helsinki, Finland",
  totalGeusts: 0,
  location: "",
  guests: 0,
  numberOfAdult: 0,
  numberOfChildren: 0,
};

const {
  OPEN_MODAL,
  CLOSE_MODAL,
  SHOW_CITIES,
  SHOW_GUEST_FILTERS,
  CHOOSE_LOCATION,
  CHOOSE_TOTAL_GUESTS,
  SET_LOCATION,
  SET_GUESTS,
  INCREMENT_ADULTS,
  DECREMENT_ADULTS,
  INCREMENT_CHILDREN,
  DECREMENT_CHILDREN,
} = types;

export const globalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModal: false,
      };
    default:
      throw new Error(`No case for type ${type} found in globalReducer.`);
  }
};
