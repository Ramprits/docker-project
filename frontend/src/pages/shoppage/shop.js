import { Fragment } from "react";
import shopData from "./shop_data";
import Navigation from "../../components/vertical-navs/VerticalNav";
import CollectionPreview from "./components/collection-preview/collectionPreview";
const ShopPage = () => {
  return (
    <Fragment>
      <Navigation
        content={{ title: "Shop Page" }}
        bucketMain={[
          <Fragment>
            {shopData.map((shop) => (
              <CollectionPreview key={shop.id} {...shop} />
            ))}
          </Fragment>,
        ]}
      ></Navigation>
    </Fragment>
  );
};
export default ShopPage;
