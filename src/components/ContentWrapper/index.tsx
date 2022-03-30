import { makeStyles } from "@mui/styles";
import { FC } from "react";

export const ContentWrapper: FC = ({ children }) => {
  const classes = useStyles();
  return <section className={classes.section}>{children}</section>;
};

const useStyles = makeStyles({
  section: {
    height: "100%",

    display: "flex",
    justifyContent: "center",

    background: "#F6F7F8",
  },
});
