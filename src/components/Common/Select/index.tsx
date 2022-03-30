import { makeStyles } from "@mui/styles";
import { FC } from "react";

type Props = {
  handleChange: (event: any) => void;
};

export const CustomizedSelects: FC<Props> = ({ handleChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.selectContainer}>
      <select onChange={handleChange} name='language' id='language'>
        <option value='EN'>En</option>
        <option value='HE'>HE</option>
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
