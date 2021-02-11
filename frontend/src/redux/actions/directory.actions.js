import { directoryTypes } from "../constants/directory.constants";
export const directoryStart = () => ({
  type: directoryTypes.DIRECTORY_START,
});
export const directorySuccess = (payload) => ({
  type: directoryTypes.DIRECTORY_SUCCESS,
  payload,
});
export const directoryFailure = (payload) => ({
  type: directoryTypes.DIRECTORY_FAILURE,
  payload,
});
