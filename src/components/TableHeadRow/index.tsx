import { FC } from "react";
import { makeStyles } from "@mui/styles";
import { RenderRowItem } from "../RenderRowItem";
import { IEmployeePersonalInfo } from "../../interfaces/Employee/index";

export const TableHeadRow: FC<IEmployeePersonalInfo> = (props) => {
  const classes = useStyles();

  const propsArray = Object.values(props);

  return (
    <div className={classes.tableRowHead}>
      {propsArray.map((prop) => (
        <RenderRowItem>{prop}</RenderRowItem>
      ))}
    </div>
  );
};

const useStyles = makeStyles({
  tableRowHead: {
    display: "flex",
    gap: "1rem",
    borderBottom: "1px solid #EDF1F7",
    "& > *": {
      flexBasis: "100%",
      wordBreak: "break-word",
      color: "#8F9BB3",
      fontSize: ".75rem",
      padding: "1rem 0",

      boxSizing: "border-box",
    },
  },
});
