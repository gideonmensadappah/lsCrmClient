import { FC, useState } from "react";

import Add from "@mui/icons-material/Add";

import { AddEmployeeCard } from "../../components/AddEmployeeCard/index";
import { CustomizedModal } from "../../components/Common/CustomizedModal";
import { Btn as Button } from "../../components/Common/Button";
import { Title } from "../../components/Common/Title";

import { EmployeesList } from "../Employees";
import useStyles from "./useStyles";
import { useMobile } from "../../hooks/useMobile";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import CustomizedSnackbars from "../../components/Common/Snackbars/index";
import { useSelector } from "react-redux";
import {
  employeesErrorStateSelector,
  employeesErrorTypeStateSelector,
} from "../../redux/employees/employees-selector";
import { emploeesAction } from "../../redux/employees/employees.reducer";
import { useAuth } from "../../hooks/useAuth";
import { IEmployeePersonalInfo } from "../../interfaces/Employee/index";

const manageModal = {
  isAddingEmployee: false,
  isEditingEmployee: false,
};
type ManageEmployeesProps = {
  firbaseApp?: firebase.app.App;
};
export const ManageEmployeesScreen: FC<ManageEmployeesProps> = ({
  firbaseApp,
}) => {
  const [{ isAddingEmployee, isEditingEmployee }, setIsManageModalEmployee] =
    useState(manageModal);
  const [employeeOnEdit, setEmployeeOnEdit] =
    useState<IEmployeePersonalInfo | null>(null);

  const employeesError = useSelector(employeesErrorStateSelector);
  const employeesErrorType = useSelector(employeesErrorTypeStateSelector);
  const { clearError } = emploeesAction;

  useAuth({
    authMeeage: employeesError,
    authErrorType: employeesErrorType,
    clearSource: clearError,
  });

  const handleSetEmployeeOnEdit = (employee: IEmployeePersonalInfo | null) =>
    setEmployeeOnEdit(employee);

  const handleOpenisAddingEmployee = () =>
    setIsManageModalEmployee((prevState) => ({
      ...prevState,
      isAddingEmployee: !prevState.isAddingEmployee,
    }));
  const handleOpenEditingEmployee = () =>
    setIsManageModalEmployee((prevState) => ({
      ...prevState,
      isEditingEmployee: !prevState.isEditingEmployee,
    }));

  const handleClose = () => {
    setIsManageModalEmployee(manageModal);
    handleSetEmployeeOnEdit(null);
  };

  const isMobile = useMobile();
  const classes = useStyles();

  const employeesListprops = {
    open: isEditingEmployee,
    handleSetEmployeeOnEdit,
    handleOpen: handleOpenEditingEmployee,
    handleClose,
  };
  const modalProps = {
    handleClose,
    open: isAddingEmployee || !!employeeOnEdit,
    Element: (
      <AddEmployeeCard
        employeeOnEdit={employeeOnEdit}
        handleClose={handleClose}
      />
    ),
  };

  const AddEmployeeBtn = isMobile ? (
    <div
      className={classes.addEmployeeMobileBtn}
      onClick={handleOpenisAddingEmployee}
    >
      <Add fontSize='small' />
    </div>
  ) : (
    <Button handleClick={handleOpenisAddingEmployee}>+ Add Employee</Button>
  );

  return (
    <div className={classes.manageEmployeesContainer}>
      <div>
        <Title>Manage Employees</Title>
        {AddEmployeeBtn}
      </div>
      <EmployeesList {...employeesListprops} />
      <CustomizedModal {...modalProps} />
      <CustomizedSnackbars />
    </div>
  );
};
