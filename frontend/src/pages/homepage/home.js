import React from "react";
import VerticalNav from "../../components/vertical-navs/VerticalNav";
import Directory from "./components/directory";

export default function HomePage() {
  return (
    <React.Fragment>
      <VerticalNav
        content={{
          title: "Collection Page",
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
        bucketMain={[<Directory content={null} />]}
      />
    </React.Fragment>
  );
}
