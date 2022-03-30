import { FC } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

type Props = {
  handleClick?: () => void;
};

const buttonTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export const Btn: FC<Props> = (props) => {
  const { children, handleClick } = props;

  const classes = useStyles();
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button onClick={handleClick} className={classes.btn} variant='contained'>
        {children}
      </Button>
    </ThemeProvider>
  );
};

const useStyles = makeStyles({
  btn: {
    fontSize: "1rem",
    width: "fit-content",
    padding: ".75em 2em !important",
    backgroundColor: "#577BF9 !important",
  },
});
