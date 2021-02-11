import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "../components/menuItem";

export default function Directory(props) {
  const content = {
    ...props.content,
  };
  const sections = [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      size: 4,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      size: 4,
      linkUrl: "",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      size: 4,
      linkUrl: "",
    },
    {
      title: "women's",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: 6,
      id: 4,
      linkUrl: "",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: 6,
      id: 5,
      linkUrl: "",
    },
  ];
  return (
    <Grid container spacing={2}>
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </Grid>
  );
}
