import { FC, useEffect } from "react";

import { CustomizedModal } from "../../components/Common/CustomizedModal";
import { TableHeadRow } from "../../components/TableHeadRow/index";

import { useMobile } from "../../hooks/useMobile";
import {
  IEmployeePersonalInfo,
  IEmployeeSignUpInfo,
} from "../../interfaces/Employee/index";

import { header } from "./mock";
import { RenderEmployeeCard } from "../../components/RenderEmployeeCard/index";

import useStyles from "./useStyles";
import { useDispatch, useSelector } from "react-redux";
import { employeesSelectore } from "../../redux/employees/employees-selector";
import { fetch_employees } from "../../redux/employees/employees.actions";
import { useIsSuperAdmin } from "../../hooks/useIsSuperAdmin";

export type EmployeesListProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleSetEmployeeOnEdit: (emplyee: IEmployeePersonalInfo) => void;
};

export const EmployeesList: FC<EmployeesListProps> = (props) => {
  const dispatch = useDispatch();
  const employees = useSelector(employeesSelectore);

  useEffect(() => {
    dispatch(fetch_employees());
  }, [dispatch]);

  const classes = useStyles();

  const { open, handleClose } = props;

  const isAdmin = useIsSuperAdmin();

  // const modalProps = {
  //   open,
  //   displayBg: true,
  //   handleClose,
  //   Element: (
  //     <div className={classes.editModal}>
  //       <div onClick={handleClose}>Edit</div>
  //       <div onClick={handleClose}>Delete</div>
  //     </div>
  //   ),
  // };

  const tableHeaderProps = isAdmin
    ? {
        ...header,
        edit: "",
      }
    : header;

  const isMobile = useMobile();

  return (
    <div className={classes.employeesListContainer}>
      {!isMobile && (
        <TableHeadRow {...(tableHeaderProps as IEmployeePersonalInfo)} />
      )}
      {employees.map((employee: any) => {
        const { address, roll, phone, firstName, lastName, email, createdAt } =
          employee;
        const emp = {
          _id: employee._id,
          email: email,
          firstName: firstName,
          lastName: lastName,
          phone: phone?.trim() ? phone : "NO PHONE",
          address: address?.trim() ? address : "NO ADDRESS",
          roll: roll?.trim() ? roll : "NO ROLL",
          createdAt: createdAt,
        };
        return <RenderEmployeeCard {...{ employee: emp, ...props }} />;
      })}
      {/* <CustomizedModal {...modalProps} /> */}
    </div>
  );
};
