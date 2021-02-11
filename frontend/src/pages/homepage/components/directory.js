import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "../components/menuItem";
import Loading from "../../../components/Loading";

export default function Directory(props) {
  const content = {
    ...props.content,
  };

  return (
    <Fragment>
      {content.loading ? (
        <Loading open={content.loading} />
      ) : (
        <>
          <Grid container spacing={2}>
            {content.directories.map((section) => (
              <MenuItem key={section.id} {...section} />
            ))}
          </Grid>
        </>
      )}
    </Fragment>
  );
}
