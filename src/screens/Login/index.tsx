import { FC, useEffect, useState } from "react";
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
import {
  authMessageStateSelector,
  authMessageTypeStateSelector,
} from "../../redux/auth/auth-selector";

import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { authAction } from "../../redux/auth/auth-reducer";
import { AlertType } from "../../interfaces/redux/IAlertState";
import { useAuth } from "../../hooks/useAuth";

const styls = {
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

type LoginProps = {
  firbaseApp?: firebase.app.App;
};
export const Login: FC<LoginProps> = ({ firbaseApp }) => {
  const [formState, setInputState] = useState(initialIEmployeeSignUpInfo);
  const authMeeage = useSelector(authMessageStateSelector);
  const authErrorType = useSelector(authMessageTypeStateSelector);

  const { clearError } = authAction;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useAuth({ authMeeage, authErrorType, clearSource: clearError });

  // useEffect(() => {
  //   const ui = new firebaseui.auth.AuthUI(firbaseApp.auth());

  //   ui.start("#firebaseui-auth-container", {
  //     signInSuccessUrl: "/manage-employees",
  //     signInOptions: [
  //       // List of OAuth providers supported.
  //       // auth.GoogleAuthProvider.PROVIDER_ID,
  //       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //       firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     ],
  //     // Other config options...
  //   });
  // }, []);

  const gotoSignIn = () => navigate(Path.register);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setInputState((prev) => ({ ...prev, [name]: value }));

  const handleClick = () => {
    setInputState(initialIEmployeeSignUpInfo);
    dispatch(singIn(formState));
  };

  const classes = useStyles();

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
      {/* <div id='firebaseui-auth-container'></div> */}
      <CustomizedSnackbars />

      <div>Our Terms of Use and Privacy Policy</div>
    </div>
  );
};
