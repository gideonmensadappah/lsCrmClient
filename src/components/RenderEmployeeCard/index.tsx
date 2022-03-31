import { FC } from "react";

import { EmployeeCard } from "../EmployeeCard/index";
import { TableRowCard } from "../TableRowCard/index";
import { EmployeesListProps } from "../../screens/Employees/index";

import { getIconByName } from "../../utils/Healpers/index";
import { useMobile } from "../../hooks/useMobile";
import { IEmployeePersonalInfo } from "../../interfaces/Employee/index";
import { useDispatch } from "react-redux";
import { delete_employee } from "../../redux/employees/employees.actions";
import { useIsSuperAdmin } from "../../hooks/useIsSuperAdmin";

type RenderEmployeeCardProps = Pick<
  EmployeesListProps,
  "handleOpen" | "handleSetEmployeeOnEdit"
> & {
  employee: IEmployeePersonalInfo | any;
};

export const RenderEmployeeCard: FC<RenderEmployeeCardProps> = (props) => {
  const dispatch = useDispatch();
  const { employee, handleOpen, handleSetEmployeeOnEdit } = props;

  const { _id, email, ...rest } = employee;
  const isAdmin = useIsSuperAdmin();

  const isMobile = useMobile();

  const handleEdit = () => {
    console.log(employee);
    handleSetEmployeeOnEdit(employee);
  };
  const handleDelete = () => {
    console.log(_id);
    dispatch(delete_employee(_id!));
  };

  const tableRowCardEdit = {
    edit: (
      <>
        <img
          style={{ cursor: "pointer" }}
          onClick={handleEdit}
          src={getIconByName("edit")}
          alt='edit icon'
        />
        <img
          style={{ cursor: "pointer", marginInlineStart: "2rem" }}
          onClick={handleDelete}
          src={getIconByName("delete")}
          alt='delete icon'
        />
      </>
    ),
  };

  const isAdminObj = isAdmin ? tableRowCardEdit : {};
  const employeeObj = { ...rest, ...isAdminObj } as IEmployeePersonalInfo;

  const Card = isMobile ? EmployeeCard : TableRowCard;
  return <Card handleOpen={handleOpen} employee={employeeObj} />;
};
