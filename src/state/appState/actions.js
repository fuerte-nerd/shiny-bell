import { SET_PAST, SET_CURRENT, SET_FUTURE, SET_ENABLED } from "./types";

export const setPastAppStates = (payload) => ({
  type: SET_PAST,
  payload,
});

export const setCurrentAppState = (payload) => ({
  type: SET_CURRENT,
  payload,
});

export const setFutureAppStates = (payload) => ({
  type: SET_FUTURE,
  payload,
});

export const setEnabled = (payload) => ({
  type: SET_ENABLED,
  payload,
});
