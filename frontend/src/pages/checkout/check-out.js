import React from "react";
import { useSelector } from "react-redux";
import VerticalNav from "../../components/vertical-navs/VerticalNav";
import CheckOutView from "./checkout-view";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/selectors/cart.selector";

const CheckoutPage = () => {
  const total = useSelector(selectCartItemsTotal);
  const cartItems = useSelector(selectCartItems);
  return (
    <React.Fragment>
      <VerticalNav
        content={{
          title: "Checkout page",
          brand: {
            text: "Dhanai Fruits Mart",
            image: "mui-assets/img/logo-pied-piper-white.png",
            width: "120",
          },
          "brand-small": {
            text: "Dhanai Fruits Mart",
            image: "mui-assets/img/logo-pied-piper-white-icon.png",
            width: "32",
          },
          link1: "Home",
          link2: "Product",
          link4: "Contact",
        }}
        bucketMain={[<CheckOutView content={{ cartItems, total }} />]}
      />
    </React.Fragment>
  );
};

export default CheckoutPage;
