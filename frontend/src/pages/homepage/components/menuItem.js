import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  media: {
    height: 400,
  },
});

export default function MenuItem({ title, imageUrl, size }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={size} md={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imageUrl} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
