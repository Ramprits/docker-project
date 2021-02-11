import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import CollectionItem from "../collection-item/collection-item";
import Grid from "@material-ui/core/Grid";

export default function CollectionPreview({ title, items }) {
  return (
    <Fragment>
      <Typography
        style={{ display: "flex", margin: "10px", justifyContent: "center" }}
        variant="h5"
        component="h5"
      >
        {title}
      </Typography>
      <Grid container spacing={2}>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Grid>
    </Fragment>
  );
}
