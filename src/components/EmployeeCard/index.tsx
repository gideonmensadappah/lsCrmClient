import { FC } from "react";

import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import EmployeeAvatar from "../../components/Common/Avatar/index";

import { IEmployeePersonalInfo } from "../../interfaces/Employee";
import useStyles from "./useStyles";

export type EmployeeCardPros = {
  handleOpen: () => void;
  employee: IEmployeePersonalInfo;
};

export const EmployeeCard: FC<EmployeeCardPros> = (props) => {
  const { employee, handleOpen } = props;
  const { firstName, lastName, roll, phone, address, createdAt } = employee;

  const classes = useStyles();
  return (
    <div className={classes.employeeCard}>
      <div className={classes.employeeCardInfo}>
        <EmployeeAvatar employeeInfo={employee} />
        <div className={classes.info}>
          <div>
            {firstName} {lastName}
          </div>
          <div>{roll}</div>
          <div>Start Date: {createdAt}</div>
          <div>{phone}</div>
          <div>{address}</div>
        </div>
      </div>
      <IconButton aria-label='settings' onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
};
