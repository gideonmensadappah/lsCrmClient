import { FC, useState } from "react";

import Add from "@mui/icons-material/Add";

import { AddEmployeeCard } from "../../components/AddEmployeeCard/index";
import { CustomizedModal } from "../../components/Common/CustomizedModal";
import { Btn as Button } from "../../components/Common/Button";
import { Title } from "../../components/Common/Title";

import { EmployeesList } from "../Employees";
import useStyles from "./useStyles";
import { useMobile } from "../../hooks/useMobile";

const manageModal = {
  isAddingEmployee: false,
  isEditingEmployee: false,
};
export const ManageEmployeesScreen: FC = () => {
  const [{ isAddingEmployee, isEditingEmployee }, setIsManageModalEmployee] =
    useState(manageModal);

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

  const handleClose = () => setIsManageModalEmployee(manageModal);

  const isMobile = useMobile();
  const classes = useStyles();

  const employeesListprops = {
    open: isEditingEmployee,
    handleOpen: handleOpenEditingEmployee,
    handleClose,
  };
  const modalProps = {
    handleClose,
    open: isAddingEmployee,
    Element: <AddEmployeeCard handleClose={handleClose} />,
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
    </div>
  );
};
