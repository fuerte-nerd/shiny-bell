import {
  SET_FONTS,
  SET_FONT,
  SET_PALETTE,
  SET_BGCOLOR,
  SET_DIALOGS,
  SET_PRIMARY,
  SET_SECONDARY,
  SET_LOCKS,
  SET_MODE,
} from "./types";

export const setMode = (data) => ({
  type: SET_MODE,
  payload: data,
});

export const setLocked = (data) => ({
  type: SET_LOCKS,
  payload: data,
});

export const setDialogs = (data) => ({
  type: SET_DIALOGS,
  payload: data,
});

export const setFonts = (data) => ({
  type: SET_FONTS,
  payload: data,
});

export const setFont = (data) => ({
  type: SET_FONT,
  payload: data,
});

export const setPrimary = (data) => ({
  type: SET_PRIMARY,
  payload: data,
});

export const setSecondary = (data) => ({
  type: SET_SECONDARY,
  payload: data,
});

export const setPalette = (data) => ({
  type: SET_PALETTE,
  payload: data,
});

export const setBgColor = (data) => ({
  type: SET_BGCOLOR,
  payload: data,
});
