import { makeStyles } from "@mui/styles";
import { FC } from "react";

type Props<T = string> = {
  name: string;
  values: Array<T>;
  id?: string;
  handleChange: (event: any) => void;
};

export const CustomizedSelects: FC<Props> = (props) => {
  const { values, name, id, handleChange } = props;
  const classes = useStyles();
  return (
    <div className={classes.selectContainer}>
      <select onChange={handleChange} name={name} id={id}>
        {values.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

const useStyles = makeStyles({
  selectContainer: {
    display: "flex",
    alignSelf: "self-end",
    marginInlineEnd: "1.8rem",
    marginBottom: "1rem",
  },
});
