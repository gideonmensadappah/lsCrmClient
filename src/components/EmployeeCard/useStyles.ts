import { makeStyles } from "@mui/styles";

export default makeStyles({
  employeeCard: {
    borderRadius: "8px",
    height: "100%",
    maxHeight: "320px",

    padding: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#FFFFFF",

    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",

    display: "flex",
    justifyContent: "space-between",

    "& >:last-child": {
      marginTop: "0.55rem",
      padding: 0,
      alignSelf: "flex-start",
    },
  },
  employeeCardInfo: {
    display: "flex",

    "@media only screen and (max-width: 200px)": {
      flexDirection: "column",
    },

    "& >:first-child": {
      marginRight: "1rem",
    },
  },
  info: {
    marginTop: "0.55rem",

    "& > div": {
      marginBottom: ".55rem",
    },
  },
});
