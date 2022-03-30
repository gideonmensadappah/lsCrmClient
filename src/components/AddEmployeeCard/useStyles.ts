import { makeStyles } from "@mui/styles";

export default makeStyles({
  boxStyle: {
    backgroundColor: "white",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",

    padding: "0 2rem",

    "& >:first-child": {
      cursor: "pointer",
    },
  },
  headerStyle: {
    display: "flex",
    justifyContent: "space-between",

    "@media only screen and (max-width: 600px)": {
      "& >:last-child": {
        display: "none",
      },
    },
  },

  inputsGrop: {
    height: "90%",
    "& >:not(:last-child)": {
      margin: "0.65rem 0",
    },

    "& >:last-child": {
      marginTop: "1rem",
    },
  },
});
