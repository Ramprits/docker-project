import { Fragment, useEffect } from "react";
import Navigation from "../../components/vertical-navs/VerticalNav";
import CollectionPreview from "./components/collection-preview/collectionPreview";
import { useDispatch, useSelector } from "react-redux";
import { shopCollectionSuccess } from "../../redux/actions/shop.actions";

const ShopPage = () => {
  const { shopCollections } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopCollectionSuccess());
    return () => {};
  }, [dispatch]);

  return (
    <Fragment>
      <Navigation
        content={{ title: "Shop Page" }}
        bucketMain={[
          <Fragment>
            {shopCollections &&
              shopCollections.map((shop) => (
                <CollectionPreview key={shop.id} {...shop} />
              ))}
          </Fragment>,
        ]}
      ></Navigation>
    </Fragment>
  );
};
export default ShopPage;
