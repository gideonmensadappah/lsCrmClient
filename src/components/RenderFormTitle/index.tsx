import { FC } from "react";
import useStyles from "../../screens/Register/useStyles";

export const RenderFormTitle: FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.renderFormTitle}>{children}</div>;
};
