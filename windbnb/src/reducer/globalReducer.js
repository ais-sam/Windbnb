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
  HIDE_CITIES,
  SHOW_GUEST_FILTERS,
  HIDE_GUEST_FILTERS,
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
    case SHOW_CITIES:
      return {
        ...state,
        isCities: true,
      };
    case HIDE_CITIES:
      return {
        ...state,
        isCities: false,
      };
    case SHOW_GUEST_FILTERS:
      return {
        ...state,
        isGuestFilters: true,
      };
    case HIDE_GUEST_FILTERS:
      return {
        ...state,
        isGuestFilters: false,
      };
    case CHOOSE_LOCATION:
      return {
        ...state,
        choosedLocation: payload,
      };
      case CHOOSE_TOTAL_GUESTS:
        return {
          ...state,
          totalGeusts: payload,
        };
    default:
      throw new Error(`No case for type ${type} found in globalReducer.`);
  }
};
