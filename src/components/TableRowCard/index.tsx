import { FC } from "react";
import useStyles from "../../screens/Employees/useStyles";
import { EmployeeCardPros } from "../EmployeeCard";
import { RenderRowItem } from "../RenderRowItem";

export const TableRowCard: FC<EmployeeCardPros> = (props) => {
  const classes = useStyles();

  const { employee } = props;

  const propsArray = Object.values(employee);

  return (
    <div className={classes.tableRow}>
      {propsArray.map((prop) => (
        <RenderRowItem>{prop}</RenderRowItem>
      ))}
    </div>
  );
};
