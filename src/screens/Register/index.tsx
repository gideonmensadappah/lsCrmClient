import { FC, useEffect, useState } from "react";
import { Input } from "../../components/Common/Input/index";
import { Btn } from "../../components/Common/Button/index";
import useStyles from "./useStyles";
import { CustomizedSelects } from "../../components/Common/Select/index";
import { useNavigate } from "react-router-dom";
import { Path } from "../../interfaces/Routes";
import { RenderFormTitle } from "../../components/RenderFormTitle/index";
import { initialIEmployeeSignUpInfo } from "../../utils/Healpers/staticData";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { emploeesAction } from "../../redux/employees/employees.reducer";
import { add_employee } from "../../redux/employees/employees.actions";
import useFormHook from "../../hooks/useForm";
import { IEmployeeSignUpInfo } from "../../interfaces/Employee/index";
import { getIconByName } from "../../utils/Healpers/index";
import {
  employeesErrorTypeStateSelector,
  employeesErrorStateSelector,
} from "../../redux/employees/employees-selector";

export const Register: FC = () => {
  const [disabled, setDisabled] = useState(true);
  const [errorsState, setErrors] = useState<any>({});
  const [passwordInputView, setPasswordInputView] = useState(false);
  const [retypePasswordInputView, setRetypePasswordInputView] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { clearError } = emploeesAction;
  const employeesError = useSelector(employeesErrorStateSelector);

  const employeesErrorType = useSelector(employeesErrorTypeStateSelector);

  useAuth({
    authMeeage: employeesError,
    authErrorType: employeesErrorType,
    clearSource: clearError,
  });

  const formHookResult = useFormHook<IEmployeeSignUpInfo, IEmployeeSignUpInfo>(
    initialIEmployeeSignUpInfo,
    {} as IEmployeeSignUpInfo
  );

  const { handleChange, resetForm, errors, values } = formHookResult;

  useEffect(() => {
    const { email, password } = values;
    const disabled =
      Object.values(errors).filter(Boolean).length !== 0 || !password || !email;

    setDisabled(!!disabled);
    setErrors({ password: false, email: false });
  }, [setDisabled, errors, values]);

  const gotoSignIn = () => navigate(Path.login);

  const handleChangepasswordView = () =>
    setPasswordInputView((prevView) => !prevView);
  const handleChangeRetypepasswordView = () =>
    setRetypePasswordInputView((prevView) => !prevView);

  const handleClick = () => {
    if (!disabled) {
      resetForm(values);
      dispatch(add_employee(values));
      return;
    }

    setErrors({
      firstName: !values.firstName.trim(),
      lastName: !values.lastName.trim(),
      email: !values.email.trim(),
      password: !values.password.trim(),
      retypePassword: !values.retypePassword.trim(),
    });
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
      <div>Sign Up</div>
      <div style={styls as any}>
        <CustomizedSelects
          values={["EN", "HE"]}
          name='language'
          id='language'
          handleChange={handleChange}
        />

        <div className={classes.formCard}>
          <div>
            <RenderFormTitle>Personal Details</RenderFormTitle>
            <Input
              value={values.firstName}
              handleChange={handleChange}
              name='firstName'
              label='First Name'
              type='text'
              error={errorsState.firstName}
            />
            <Input
              value={values.lastName}
              handleChange={handleChange}
              name='lastName'
              label='Last Name'
              type='text'
              error={errorsState.lastName}
            />

            <Input
              value={values.email}
              handleChange={handleChange}
              name='email'
              label='Email'
              type='email'
              error={errorsState.email}
            />

            <RenderFormTitle>Password</RenderFormTitle>
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
            <div style={{ position: "relative" }}>
              <Input
                type={retypePasswordInputView ? "text" : "password"}
                value={values.retypePassword}
                handleChange={handleChange}
                name='retypePassword'
                label='Retype Password'
                error={
                  errorsState.retypePassword ||
                  values.password !== values.retypePassword
                }
              />
              <img
                style={{ position: "absolute", right: "1rem", top: "1.5rem" }}
                onClick={handleChangeRetypepasswordView}
                src={getIconByName(
                  retypePasswordInputView ? "view" : "viewOff"
                )}
                alt='view icon'
              />
            </div>
            <Btn handleClick={handleClick}>Sign Up</Btn>
          </div>
        </div>
      </div>

      <div className={classes.signIn}>
        Have an account? <span onClick={gotoSignIn}>Sign In</span>
      </div>

      <div>Our Terms of Use and Privacy Policy</div>
    </div>
  );
};
