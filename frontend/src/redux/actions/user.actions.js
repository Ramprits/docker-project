import history from "../../utils/history";
import toast from "react-hot-toast";
import {
  signInWithGoogle,
  auth,
  analytics,
  createUserProfileDocument,
} from "../../firebase/firebase-config";
import {
  userLoginTypes,
  userRegisterTypes,
  userSignOutTypes,
} from "../constants/user.constants";

/********* user login with google account *********/
export const userLoginStart = () => ({
  type: userLoginTypes.USER_LOGIN_START,
});
export const userLoginSuccess = (payload) => ({
  type: userLoginTypes.USER_LOGIN_SUCCESS,
  payload,
});
export const userLoginFailure = (payload) => ({
  type: userLoginTypes.USER_LOGIN_FAILURE,
  payload,
});

export const loginWithGoogle = () => async (dispatch) => {
  try {
    dispatch(userLoginStart());
    const res = await signInWithGoogle();
    dispatch(userLoginSuccess(res.user));
    analytics.logEvent("login user", res.user.email);
    history.push("/");
  } catch (error) {
    dispatch(userLoginFailure(error.message));
  }
};

/********* user login with email and password *********/

export const loginWithEmailAndPassword = (payload) => async (dispatch) => {
  try {
    dispatch(userLoginStart());
    const res = await auth.signInWithEmailAndPassword(
      payload.email,
      payload.password
    );
    dispatch(userLoginSuccess(res.user));
    history.push("/");
  } catch (error) {
    toast.error(error.message);
    dispatch(userLoginFailure(error.message));
  }
};

/********* user sign out *********/

export const userSignOutStart = () => ({
  type: userSignOutTypes.USER_SIGN_OUT_START,
});
export const userSignOutSuccess = () => ({
  type: userSignOutTypes.USER_SIGN_OUT_SUCCESS,
});
export const userSignOutFailure = (payload) => ({
  type: userSignOutTypes.USER_SIGN_OUT_FAILURE,
  payload,
});

export const userSignOut = () => async (dispatch) => {
  try {
    dispatch(userSignOutStart());
    await auth.signOut();
    dispatch(userSignOutSuccess());
    history.push("/login");
  } catch (error) {
    dispatch(userSignOutFailure(error.message));
  }
};

/********* user register *********/

export const userRegisterStart = () => ({
  type: userRegisterTypes.USER_REGISTER_START,
});
export const userRegisterSuccess = (payload) => ({
  type: userRegisterTypes.USER_REGISTER_SUCCESS,
  payload,
});
export const userRegisterFailure = (payload) => ({
  type: userRegisterTypes.USER_REGISTER_FAILURE,
  payload,
});

export const userRegister = (payload) => async (dispatch) => {
  try {
    dispatch(userRegisterStart());
    const res = await auth.createUserWithEmailAndPassword(
      payload.email,
      payload.password
    );
    const user = auth.currentUser;
    if (res.user) {
      await user
        .updateProfile({
          displayName: `${payload.firstName} ${payload.lastName}`,
        })
        .then(() => console.log("Update successful."));
      await createUserProfileDocument(user, {
        firstName: payload.firstName,
        lastName: payload.lastName,
      });
    }
    dispatch(userRegisterSuccess(user));
    history.push("/");
  } catch (error) {
    dispatch(userRegisterFailure(error.message));
  }
};
