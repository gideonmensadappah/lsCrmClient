import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "../../components/Common/Input/index";
import { Btn } from "../../components/Common/Button/index";

import { CustomizedSelects } from "../../components/Common/Select/index";
import { useNavigate } from "react-router-dom";
import { Path } from "../../interfaces/Routes";

import useStyles from "../Register/useStyles";
import CustomizedSnackbars from "../../components/Common/Snackbars/index";
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
import { useAuth } from "../../hooks/useAuth";
import { IEmployeeSignUpInfo } from "../../interfaces/Employee/index";
import useFormHook from "../../hooks/useForm";
import { getIconByName } from "../../utils/Healpers/index";

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
  const authMeeage = useSelector(authMessageStateSelector);
  const authErrorType = useSelector(authMessageTypeStateSelector);
  const [disabled, setDisabled] = useState(true);
  const [errorsState, setErrors] = useState<any>({});
  const [passwordInputView, setPasswordInputView] = useState(false);

  const { clearError } = authAction;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useAuth({ authMeeage, authErrorType, clearSource: clearError });

  const formHookResult = useFormHook<IEmployeeSignUpInfo, IEmployeeSignUpInfo>(
    {
      email: "",
      password: "",
    } as IEmployeeSignUpInfo,
    {} as IEmployeeSignUpInfo
  );

  const { handleChange, resetForm, errors, values } = formHookResult;

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

  useEffect(() => {
    const { email, password } = values;
    const disabled =
      Object.values(errors).filter(Boolean).length !== 0 || !password || !email;

    setDisabled(!!disabled);
    setErrors({ password: false, email: false });
  }, [setDisabled, errors, values]);

  const handleChangepasswordView = () =>
    setPasswordInputView((prevView) => !prevView);

  const gotoSignIn = () => navigate(Path.register);

  const handleClick = () => {
    if (!disabled) {
      resetForm(values);
      dispatch(singIn(values));
      return;
    }

    setErrors({
      password: true,
      email: true,
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>Sign In</div>

      <div style={styls as any}>
        <CustomizedSelects
          values={["EN", "HE"]}
          name='language'
          id='language'
          handleChange={handleChange}
        />
        <div className={classes.formCard}>
          <div>
            <Input
              value={values.email}
              handleChange={handleChange}
              name='email'
              label='Email'
              error={!!errorsState.email}
            />

            <div style={{ position: "relative" }}>
              <Input
                value={values.password}
                handleChange={handleChange}
                name='password'
                label='Password'
                type={passwordInputView ? "text" : "password"}
                error={errorsState.password}
              />
              <img
                style={{ position: "absolute", right: "1rem", top: "1.5rem" }}
                onClick={handleChangepasswordView}
                src={getIconByName(passwordInputView ? "view" : "viewOff")}
                alt='view icon'
              />
            </div>
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
