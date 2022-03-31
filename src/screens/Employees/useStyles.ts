import { makeStyles } from "@mui/styles";

export default makeStyles({
  employeesListContainer: {
    maxWidth: "1182px",

    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingInlineStart: "0.95rem",

    "@media only screen and (min-width: 700px)": {
      maxHeight: "720px",
      height: "77%",

      overflowY: "auto",

      /* Works on Firefox */

      scrollbarWidth: "thin",
      scrollbarColor: "#D8D8D8",

      /* Works on Chrome, Edge, and Safari */
      "&::-webkit-scrollbar": {
        width: "12px",
      },

      "&::-webkit-scrollbar-track": {
        background: "transparent",
      },

      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#D8D8D8",
        borderRadius: "20px",
      },
    },
  },
  tableRow: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    margin: "0.5rem 0",
    borderBottom: "1px solid #EDF1F7",
    padding: ".65rem 0",
    "& > *": {
      flexBasis: "100%",
      wordBreak: "break-word",
      fontSize: ".90rem",
      color: "#000000",
    },
  },
  editModal: {
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "20%",

    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    outline: "none",

    "& > div": {
      padding: "1rem",
      height: "50%",
    },
  },
});
