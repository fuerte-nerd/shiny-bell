import {
  SET_PAST,
  SET_CURRENT,
  SET_FUTURE,
  SET_STAGE_VALIDATING,
  SET_STAGE_VALIDATED,
  SET_STAGE_CHANGES,
} from "./types";

export const setPastHistory = (payload) => ({
  type: SET_PAST,
  payload,
});

export const setCurrentHistory = (payload) => ({
  type: SET_CURRENT,
  payload,
});

export const setFutureHistory = (payload) => ({
  type: SET_FUTURE,
  payload,
});

export const setStageValidating = (payload) => ({
  type: SET_STAGE_VALIDATING,
  payload,
});

export const setStageValidated = (payload) => ({
  type: SET_STAGE_VALIDATED,
  payload,
});

export const setStageChanges = (payload) => ({
  type: SET_STAGE_CHANGES,
  payload,
});
