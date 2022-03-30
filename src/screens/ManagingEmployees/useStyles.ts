import { makeStyles } from "@mui/styles";

export default makeStyles({
  addEmployeeMobileBtn: {
    height: "20px",
    width: "20px",
    borderRadius: "50%",

    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "white",
    backgroundColor: "#577BF9",
  },
  manageEmployeesContainer: {
    maxWidth: "1179px",
    width: "90%",

    "& >:first-child": {
      margin: "65px 0",

      display: "flex",
      justifyContent: "space-between",

      "@media only screen and (max-width: 600px)": {
        margin: "2.5rem 0",
      },
    },
  },
});
