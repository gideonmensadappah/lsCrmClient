import { FC } from "react";

import ArrowBack from "@mui/icons-material/ArrowBack";

import { Btn } from "../Common/Button";
import { Input } from "../Common/Input";
import { Title } from "../Common/Title";

import closeIcon from "../../assets/closeIcon.svg";
import useStyles from "./useStyles";

type Props = {
  handleClose: () => void;
};

export const AddEmployeeCard: FC<Props> = ({ handleClose }) => {
  const classes = useStyles();

  const Header = (
    <div className={classes.headerStyle}>
      <Title>Add Employee</Title>
      <img src={closeIcon} alt='closeIcon' />
    </div>
  );
  const Form = (
    <>
      <Input label='First Name' />
      <Input label='Last Name' />
      <Input label='Phone' />
      <Input label='Address' />
      <Input label='Rol' />
    </>
  );

  return (
    <div className={classes.boxStyle}>
      <ArrowBack onClick={handleClose} />
      <div className={classes.inputsGrop}>
        {Header}
        {Form}
        <Btn>Add</Btn>
      </div>
    </div>
  );
};
