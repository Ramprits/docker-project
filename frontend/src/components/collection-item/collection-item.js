import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 300,
  },
});
export default function CollectionItem({ id, name, imageUrl, price }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={3} md={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imageUrl} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button size="small" color="primary">
            Add To Cart
          </Button>
          <Button size="small" color="primary">
            ${price}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
