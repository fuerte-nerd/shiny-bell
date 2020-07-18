import { SET_LOADING, SET_LOADED, SET_FONTS, SET_BLACKLISTED } from "./types";

export const setLibraryLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setLibraryLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const setFonts = (payload) => ({
  type: SET_FONTS,
  payload,
});

export const setBlacklisted = (payload) => ({
  type: SET_BLACKLISTED,
  payload,
});
