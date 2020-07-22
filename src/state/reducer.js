import { combineReducers } from "redux";

import components from "./components/reducer";
import appState from "./appState/reducer";
import library from "./library/reducer";
import settings from "./settings/reducer";
import display from "./display/reducer";
import feedback from "./feedback/reducer";
import fontSelector from "./fontSelector/reducer";

export default combineReducers({
  components,
  appState,
  library,
  settings,
  display,
  feedback,
  fontSelector,
});
