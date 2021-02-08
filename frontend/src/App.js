import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
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
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </Router>
  );
}
