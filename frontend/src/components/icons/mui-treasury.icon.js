import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
// import Add from "@material-ui/icons/Add";
// import Delete from "@material-ui/icons/Delete";
// import RemoveIcon from "@material-ui/icons/Remove";

export const IconButtonStyle = React.memo(({ children }) => {
  const small = useSizedIconButtonStyles({
    color: "#000",
    padding: 8,
    childSize: 24,
  });
  return <IconButton classes={small}>{children}</IconButton>;
});

export default IconButtonStyle;
