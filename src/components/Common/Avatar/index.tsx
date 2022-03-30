import { FC } from "react";

import { Avatar } from "@mui/material";

import { getEmployeeInitials } from "../../../utils/Healpers";
import { IEmployeePersonalInfo } from "../../../interfaces/Employee";

type Props = {
  employeeInfo?: IEmployeePersonalInfo;
  className?: string;
  previewImage?: string;
};

const EmployeeAvatar: FC<Props> = (props) => {
  const { className, employeeInfo, previewImage } = props;
  const { firstName = "", lastName = "", img = "" } = employeeInfo ?? {};

  return (
    <Avatar
      data-card='employeeExtraInfoContainer'
      className={className}
      src={previewImage ? previewImage : img}
    >
      {getEmployeeInitials(firstName, lastName)}
    </Avatar>
  );
};

export default EmployeeAvatar;
