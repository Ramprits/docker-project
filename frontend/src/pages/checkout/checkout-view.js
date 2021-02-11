import React, { Fragment } from "react";
import NoSsr from "@material-ui/core/NoSsr";
import GoogleFontLoader from "react-google-font-loader";
import Avatar from "@material-ui/core/Avatar";
import { Row, Item } from "@mui-treasury/components/flex";
import Box from "@material-ui/core/Box";
import Delete from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from "@mui-treasury/components/info";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import { usePopularInfoStyles } from "@mui-treasury/styles/info/popular";
import IconButtonStyle from "../../components/icons/mui-treasury.icon";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useDispatch } from "react-redux";
import {
  addToCartItem,
  clearCartItem,
  removeCartItem,
} from "../../redux/actions/cart.actions";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  price: {
    display: "flex",
    maxWidth: "100px",
  },
  pointer: {
    cursor: "pointer",
  },
}));

const CheckoutView = React.memo(function CheckoutView(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const avatarStyles = useDynamicAvatarStyles({
    height: 56,
    width: 64,
    radius: 8,
  });
  const content = {
    ...props.content,
  };
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: "Poppins", weights: [400, 700] }]} />
      </NoSsr>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={6}>
          {content.cartItems.map((item) => (
            <Fragment key={item.id}>
              <Row gap={2}>
                <Item>
                  <Avatar
                    variant={"rounded"}
                    classes={avatarStyles}
                    src={item.imageUrl}
                  />
                </Item>
                <Info useStyles={usePopularInfoStyles}>
                  <InfoSubtitle>{item.name}</InfoSubtitle>
                  <InfoTitle>Most Awaited - Figma Launches Plugin</InfoTitle>
                  <InfoCaption>${item.price}</InfoCaption>
                  <InfoCaption>14 sec ago</InfoCaption>
                  <Box component="div" className={classes.price}>
                    <ChevronLeftIcon
                      color={"primary"}
                      className={classes.pointer}
                      onClick={() => dispatch(removeCartItem(item))}
                    />
                    <div>{item.quantity}</div>
                    <ChevronRightIcon
                      color={"primary"}
                      className={classes.pointer}
                      onClick={() => dispatch(addToCartItem(item))}
                    />
                  </Box>
                </Info>
                <Item
                  minWidth={48}
                  textAlign={"right"}
                  onClick={() => dispatch(clearCartItem(item.id))}
                >
                  <IconButtonStyle>
                    <Delete color={"secondary"} />
                  </IconButtonStyle>
                </Item>
              </Row>
            </Fragment>
          ))}
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextInfoContent
            overline={"Overline"}
            heading={`Total Price $${content.total}`}
            body={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris."
            }
          />
        </Grid>
      </Grid>
    </>
  );
});
export default CheckoutView;
