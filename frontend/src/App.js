import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { auth } from "./firebase/firebase-config";
import LoginForm from "./pages/auth/login";
import RegisterForm from "./pages/auth/register";

import HomePage from "./pages/homepage/home";
import IndexPage from "./pages/Index";
import ShopPage from "./pages/shoppage/shop";
import { loadUserTypes } from "./redux/constants/user.constants";
import history from "./utils/history";

export default function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    const subscription = auth.onAuthStateChanged((user) =>
      dispatch({
        type: loadUserTypes.LOAD_USER_SUCCESS,
        payload: user,
      })
    );
    return () => subscription;
  }, []);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/home"
          component={HomePage}
        />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/shop"
          component={ShopPage}
        />
        <Route
          exact
          path="/login"
          render={() => {
            console.log(isAuthenticated);
            return isAuthenticated === true ? (
              <Redirect to="/" />
            ) : (
              <LoginForm />
            );
          }}
        />
        <Route
          exact
          path="/register"
          render={() =>
            isAuthenticated === true ? (
              <Redirect to="/"></Redirect>
            ) : (
              <RegisterForm />
            )
          }
        />
      </Switch>
    </Router>
  );
}
