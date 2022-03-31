import { makeStyles } from "@mui/styles";

export default makeStyles<any, any>({
  boxStyle: {
    backgroundColor: "white",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",

    padding: "2rem",

    "@media only screen and (min-width: 600px)": {
      position: "absolute",
      maxHeight: "521px",
      maxWidth: "566px",
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
      margin: ({ inputWithMargin }: any) =>
        !inputWithMargin ? "0" : "0.65rem 0",
    },

    "& >:last-child": {
      marginTop: "1rem",
    },
  },
});
