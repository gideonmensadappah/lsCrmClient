import { FC, useEffect } from "react";

import { CustomizedModal } from "../../components/Common/CustomizedModal";
import { TableHeadRow } from "../../components/TableHeadRow/index";
import { connectedemployee } from "../../components/TableRowCard/index";

import { useMobile } from "../../hooks/useMobile";
import { IEmployeePersonalInfo } from "../../interfaces/Employee/index";

import { header } from "./mock";
import { RenderEmployeeCard } from "../../components/RenderEmployeeCard/index";

import useStyles from "./useStyles";
import { useDispatch, useSelector } from "react-redux";
import { employeesSelectore } from "../../redux/employees/employees-selector";
import { fetch_employees } from "../../redux/employees/employees.actions";

export type EmployeesListProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

export const EmployeesList: FC<EmployeesListProps> = (props) => {
  const dispatch = useDispatch();
  const employees = useSelector(employeesSelectore);

  useEffect(() => {
    dispatch(fetch_employees());
  }, [employees]);

  const classes = useStyles();

  const { open, handleClose } = props;

  const { isAdmin } = connectedemployee;

  const modalProps = {
    open,
    displayBg: true,
    handleClose,
    Element: (
      <div className={classes.editModal}>
        <div onClick={handleClose}>Edit</div>
        <div onClick={handleClose}>Delete</div>
      </div>
    ),
  };

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
      {employees.map((employee) => {
        const emp: IEmployeePersonalInfo = {
          firstName: employee.firstName,
          lastName: employee.lastName,
          phone: employee.phone ?? "NO PHONE",
          address: employee.address ?? "NO ADDRESS",
          roll: employee.roll ?? "NO ROLL",
          createdAt: employee.createdAt,
        };
        return <RenderEmployeeCard {...{ employee: emp, ...props }} />;
      })}
      <CustomizedModal {...modalProps} />
    </div>
  );
};
