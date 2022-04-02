import { FC, useState } from "react";

import ArrowBack from "@mui/icons-material/ArrowBack";

import { Btn } from "../Common/Button";
import { Input } from "../Common/Input";
import { Title } from "../Common/Title";

import closeIcon from "../../assets/closeIcon.svg";
import useStyles from "./useStyles";
import { useMobile } from "../../hooks/useMobile";
import {
  IEmployeePersonalInfo,
  IEmployeeSignUpInfo,
} from "../../interfaces/Employee/index";
import { useDispatch } from "react-redux";
import {
  add_employee,
  edit_employee,
} from "../../redux/employees/employees.actions";

type Props = {
  handleClose: () => void;
  employeeOnEdit: IEmployeePersonalInfo | null;
};
//
const initialState: Partial<IEmployeePersonalInfo | IEmployeeSignUpInfo> = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  roll: "",
  email: "",
};
export const AddEmployeeCard: FC<Props> = ({ handleClose, employeeOnEdit }) => {
  const [employee, setEmployee] = useState(
    employeeOnEdit ? employeeOnEdit : initialState
  );
  const dispatch = useDispatch();
  const classes = useStyles({ inputWithMargin: false });
  const isMobile = useMobile();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setEmployee((prev) => ({ ...prev, [name]: value }));

  const handleClick = () => {
    // TODO: validate fields before send to server
    if (!employee._id) {
      dispatch(
        add_employee({
          ...employee,
          password: employee.phone,
        } as IEmployeeSignUpInfo)
      );
    } else {
      dispatch(edit_employee(employee as IEmployeeSignUpInfo));
    }
    handleClose();
  };

  const { firstName, lastName, phone, email, address, roll } =
    employee as IEmployeeSignUpInfo;
  console.log(employee);
  const Header = (
    <div className={classes.headerStyle}>
      <Title>Add Employee</Title>
      <img
        style={{ cursor: "pointer" }}
        src={closeIcon}
        onClick={handleClose}
        alt='closeIcon'
      />
    </div>
  );

  const Form = (
    <>
      <Input
        name='firstName'
        value={firstName}
        handleChange={handleChange}
        label='First Name'
      />
      <Input
        name='lastName'
        value={lastName}
        handleChange={handleChange}
        label='Last Name'
      />
      <Input
        name='email'
        value={email}
        handleChange={handleChange}
        label='Email'
      />
      <Input
        name='phone'
        value={phone}
        handleChange={handleChange}
        label='Phone'
      />
      <Input
        name='address'
        value={address}
        handleChange={handleChange}
        label='Address'
      />
      <Input
        name='roll'
        value={roll}
        handleChange={handleChange}
        label='Roll'
      />
    </>
  );

  return (
    <div className={classes.boxStyle}>
      {isMobile && <ArrowBack onClick={handleClose} />}

      <div className={classes.inputsGrop}>
        {Header}
        {Form}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Btn handleClick={handleClick}>{employeeOnEdit ? "Edit" : "Add"}</Btn>
        </div>
      </div>
    </div>
  );
};
