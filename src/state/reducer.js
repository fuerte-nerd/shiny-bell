import { combineReducers } from "redux";

import components from "./components/reducer";
import appState from "./appState/reducer";
import library from "./library/reducer";
import settings from "./settings/reducer";
import viewables from "./viewables/reducer";

export default combineReducers(
  components,
  appState,
  library,
  settings,
  viewables
);
