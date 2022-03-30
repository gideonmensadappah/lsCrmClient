import { FC } from "react";

import { EmployeeCard } from "../EmployeeCard/index";
import { TableRowCard, connectedemployee } from "../TableRowCard/index";
import { EmployeesListProps } from "../../screens/Employees/index";

import { getIconByName } from "../../utils/Healpers/index";
import { useMobile } from "../../hooks/useMobile";
import { IEmployeePersonalInfo } from "../../interfaces/Employee/index";

type RenderEmployeeCardProps = Pick<EmployeesListProps, "handleOpen"> & {
  employee: IEmployeePersonalInfo;
};

export const RenderEmployeeCard: FC<RenderEmployeeCardProps> = (props) => {
  const { employee, handleOpen } = props;
  const { _id, ...rest } = employee;
  const { isAdmin } = connectedemployee;

  const isMobile = useMobile();

  const handleEdit = () => alert(_id);
  const handleDelete = () => {};

  const tableRowCardEdit = {
    edit: (
      <>
        <img onClick={handleEdit} src={getIconByName("edit")} alt='edit icon' />
        <img
          style={{ marginInlineStart: "2rem" }}
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
