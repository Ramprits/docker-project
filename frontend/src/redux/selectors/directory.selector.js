import { createSelector } from "reselect";
const Directory = (state) => state.directory;

export const selectDirectory = createSelector(
  [Directory],
  (d) => d.directories
);
