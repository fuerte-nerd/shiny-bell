import { SET_PAST, SET_CURRENT, SET_FUTURE, SET_ENABLED } from "./types";

const initialState = {
  past: [],
  current: {
    body: {
      themeName: "",
      linkName: "",
      id: 0,
      category: "",
    },
    header: {
      themeName: "",
      linkName: "",
      id: 0,
      category: "",
    },
    palette: {
      primary: {
        hex: "#000000",
        name: "Black",
      },
      secondary: {
        hex: "#FFFFFF",
        name: "White",
      },
    },
  },
  future: [],
  enabled: true,
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
    case SET_ENABLED:
      newState.enabled = payload;
      break;
    default:
      break;
  }

  return newState;
};
