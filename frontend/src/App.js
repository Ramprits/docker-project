import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { auth } from "./firebase/firebase-config";
import LoginForm from "./pages/auth/login";
import RegisterForm from "./pages/auth/register";
import CheckoutPage from "./pages/checkout/check-out";
import Contact from "./pages/contact";

import HomePage from "./pages/homepage/home";
import IndexPage from "./pages/Index";
import ShopPage from "./pages/shoppage/shop";
import history from "./utils/history";

export default function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    const subscription = auth.onAuthStateChanged((user) => console.log);
    return () => subscription;
  }, [dispatch]);

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
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/checkout"
          component={CheckoutPage}
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
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}
