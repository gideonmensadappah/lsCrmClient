import { makeStyles } from "@mui/styles";

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div>Logo</div>
      <div>Roni Bonim</div>
    </header>
  );
};

const useStyles = makeStyles({
  header: {
    backgroundColor: "#FFFFFF",

    display: "flex",
    justifyContent: "space-between",

    borderBottom: "1px solid #D8D8D8",

    padding: "1% 2%",
    "@media only screen and (max-width: 600px)": {
      display: "none",
    },
  },
});
