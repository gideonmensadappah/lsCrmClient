import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticatedEmployee } from "../../redux/auth/auth-selector";
import { authAction } from "../../redux/auth/auth-reducer";
import ExitToAppSharp from "@mui/icons-material/ExitToAppSharp";

export const Header = () => {
  const classes = useStyles();
  const employee = useSelector(authenticatedEmployee);

  const dispatch = useDispatch();
  const { singOutUser } = authAction;
  const handleLogOut = () => dispatch(singOutUser());

  return (
    <header className={classes.header}>
      <div>Logo</div>

      {employee && (
        <div onClick={handleLogOut}>
          <div>{employee.firstName + " " + employee.lastName}</div>
          <ExitToAppSharp />
        </div>
      )}
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

    "& >:last-child": {
      display: "flex",
      cursor: "pointer",

      "& >:first-child": {
        marginInlineEnd: "1rem",
      },
    },

    "@media only screen and (max-width: 600px)": {
      display: "none",
    },
  },
});
