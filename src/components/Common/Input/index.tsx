import { FC } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

type Props = {
  label: string;
  name?: string;
  value?: string;
  error?: boolean;
  type?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = (props) => {
  const { children, handleChange = () => {}, ...rest } = props;
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      onChange={handleChange}
      id='standard-basic'
      variant='standard'
      {...rest}
    />
  );
};

const useStyles = makeStyles({
  input: {
    marginTop: "1rem !important",
    width: "100% !important",
    "& >div >input": {
      paddingRight: "3.5rem !important",
    },
  },
});
