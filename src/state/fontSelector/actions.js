import { SET_SECTION, SET_CATEGORY_FILTERS, SET_ERROR } from "./types";

export const setSection = (payload) => ({
  type: SET_SECTION,
  payload,
});

export const setCategoryFilters = (payload) => ({
  type: SET_CATEGORY_FILTERS,
  payload,
});

export const setError = (payload) => ({ type: SET_ERROR, payload });
