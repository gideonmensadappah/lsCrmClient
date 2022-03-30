import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "96%",

    "& >:first-child": {
      fontSize: "1.9rem",
      fontWeight: "bold",
    },
  },

  formCard: {
    boxSizing: "border-box",

    width: "90%",
    maxHeight: "668px",
    maxWidth: "556px",

    border: "1px solid #E6EAEE",
    backgroundColor: "#FFFFFF",

    "& > div": {
      padding: "4.4rem",
    },
    "& > div > div:nth-child(5)": {
      marginTop: "3rem",
    },
    "& > div >:last-child": {
      marginTop: "1.5rem",
    },
  },

  renderFormTitle: {
    fontSize: "1.1rem",
    color: "rgba(0,0,0,0.87)",
  },
  signInButtonWrapper: { display: "flex", justifyContent: "center" },
  signIn: {
    "& > span": {
      cursor: "pointer",
      color: "#577BF9",
    },
  },
});
