import {
  SET_PAST,
  SET_CURRENT,
  SET_FUTURE,
  SET_STAGE_VALIDATING,
  SET_STAGE_VALIDATED,
  SET_STAGE_CHANGES,
} from "./types";

const initialState = {
  past: [],
  current: null,
  future: [],
  stage: {
    isValidating: false,
    validated: false,
    changes: null,
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const newState = Object.assign({}, state);

  switch (type) {
    case SET_PAST:
      newState.past = payload;
      break;
    case SET_CURRENT:
      newState.current = payload;
      break;
    case SET_FUTURE:
      newState.future = payload;
      break;
    case SET_STAGE_VALIDATING:
      newState.stage.isValidating = payload;
      break;
    case SET_STAGE_VALIDATED:
      newState.stage.validated = payload;
      break;
    case SET_STAGE_CHANGES:
      newState.stage.changes = payload;
      break;
    default:
      break;
  }

  return newState;
};
