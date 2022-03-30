import { FC, useState } from "react";
import { Input } from "../../components/Common/Input/index";
import { Btn } from "../../components/Common/Button/index";
import useStyles from "./useStyles";
import { CustomizedSelects } from "../../components/Common/Select/index";
import { useNavigate } from "react-router-dom";
import { Path } from "../../interfaces/Routes";
import { RenderFormTitle } from "../../components/RenderFormTitle/index";
import { initialIEmployeeSignUpInfo } from "../../utils/Healpers/staticData";

export const Register: FC = () => {
  const [formState, setInputState] = useState(initialIEmployeeSignUpInfo);
  const navigate = useNavigate();

  const gotoSignIn = () => navigate(Path.login);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setInputState((prev) => ({ ...prev, [name]: value }));

  const handleClick = () => setInputState(initialIEmployeeSignUpInfo);

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
        <CustomizedSelects handleChange={handleChange} />
        <div className={classes.formCard}>
          <div>
            <RenderFormTitle>Personal Details</RenderFormTitle>
            <Input
              value={formState.firstName}
              handleChange={handleChange}
              name='firstName'
              label='First Name'
            />
            <Input
              value={formState.lastName}
              handleChange={handleChange}
              name='lastName'
              label='Last Name'
            />
            <Input
              value={formState.email}
              handleChange={handleChange}
              name='email'
              label='Email'
            />

            <RenderFormTitle>Password</RenderFormTitle>
            <Input
              value={formState.password}
              handleChange={handleChange}
              name='password'
              label='Password'
            />
            <Input
              value={formState.retypePassword}
              handleChange={handleChange}
              name='retypePassword'
              label='Retype Password'
            />
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
