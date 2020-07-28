import { SET_SECTION } from "./types";

const initialState = {
  section: "body",
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_SECTION:
      newState.colorPicker.section = payload;
      break;
    default:
      break;
  }

  return newState;
};
