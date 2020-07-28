import { SET_SECTION } from "./types";

const initialState = {
  section: "primary",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_SECTION:
      newState.section = payload;
      break;
    default:
      break;
  }

  return newState;
};
