import {
  loadUserTypes,
  userLoginTypes,
  userRegisterTypes,
  userSignOutTypes,
} from "../constants/user.constants";

const initialState = {
  currentUser: undefined,
  loading: false,
  isAuthenticated: false,
  errorMessage: "",
};

export const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userLoginTypes.USER_LOGIN_START:
    case userSignOutTypes.USER_SIGN_OUT_START:
    case userRegisterTypes.USER_REGISTER_START:
    case loadUserTypes.LOAD_USER_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: "",
        isAuthenticated: false,
      });
    case userLoginTypes.USER_LOGIN_SUCCESS:
    case userRegisterTypes.USER_REGISTER_SUCCESS:
    case loadUserTypes.LOAD_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
        isAuthenticated: true,
        currentUser: payload,
      });

    case userLoginTypes.USER_LOGIN_FAILURE:
    case userSignOutTypes.USER_SIGN_OUT_FAILURE:
    case userRegisterTypes.USER_REGISTER_FAILURE:
    case loadUserTypes.LOAD_USER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload,
        isAuthenticated: false,
        currentUser: undefined,
      });

    case userSignOutTypes.USER_SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
        isAuthenticated: false,
        currentUser: undefined,
      });

    default:
      return state;
  }
};
