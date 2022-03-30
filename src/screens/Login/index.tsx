import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "../../components/Common/Input/index";
import { Btn } from "../../components/Common/Button/index";

import { CustomizedSelects } from "../../components/Common/Select/index";
import { useNavigate } from "react-router-dom";
import { Path } from "../../interfaces/Routes";

import { initialIEmployeeSignUpInfo } from "../../utils/Healpers/staticData";
import useStyles from "../Register/useStyles";
import CustomizedSnackbars from "../../components/Common/Snackbars/index";
import { alertAction } from "../../redux/alerts/alert-reducer";
import { singIn } from "../../redux/auth/auth-actions";
import { authErrorStateSelector } from "../../redux/auth/auth-selector";

export const Login: FC = () => {
  const [formState, setInputState] = useState(initialIEmployeeSignUpInfo);
  const authError = useSelector(authErrorStateSelector);
  const { createSuccessMessage, createErrorMessage } = alertAction;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gotoSignIn = () => navigate(Path.register);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setInputState((prev) => ({ ...prev, [name]: value }));

  const handleClick = () => {
    setInputState(initialIEmployeeSignUpInfo);
    dispatch(singIn(initialIEmployeeSignUpInfo));

    if (authError) {
      dispatch(createErrorMessage({ message: authError }));

      return;
    } else {
      dispatch(createSuccessMessage({ message: "Success" }));
    }
  };

  const classes = useStyles();
  const styls = {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div className={classes.container}>
      <div>Sign In</div>
      <div style={styls as any}>
        <CustomizedSelects handleChange={handleChange} />
        <div className={classes.formCard}>
          <div>
            <Input
              value={formState.email}
              handleChange={handleChange}
              name='email'
              label='Email'
            />

            <Input
              value={formState.password}
              handleChange={handleChange}
              name='password'
              label='Password'
            />
            <div className={classes.signInButtonWrapper}>
              <Btn handleClick={handleClick}>Sign In</Btn>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.signIn}>
        Don’t have an account? <span onClick={gotoSignIn}>Sign Up</span>
      </div>
      <CustomizedSnackbars />

      <div>Our Terms of Use and Privacy Policy</div>
    </div>
  );
};
