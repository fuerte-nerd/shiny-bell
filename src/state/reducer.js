import { combineReducers } from "redux";

import components from "./components/reducer";
import history from "./history/reducer";
import library from "./library/reducer";
import settings from "./settings/reducer";
import viewables from "./viewables/reducer";

export default combineReducers(
  components,
  history,
  library,
  settings,
  viewables
);
