import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";
import { alertStateSelector } from "../../../redux/alerts/alert-selector";
import { alertAction } from "../../../redux/alerts/alert-reducer";

type TransitionProps = Omit<SlideProps, "direction">;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction='up' />;
}

export default function CustomizedSnackbars() {
  const alertState = useSelector(alertStateSelector);

  const { clearAlert } = alertAction;

  const dispatch = useDispatch();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;

    dispatch(clearAlert());
  };
  console.log(alertState);
  const severity = alertState.type === "error" ? "error" : "success";
  const style = { width: "100%" };
  return (
    <Stack spacing={2} sx={style}>
      <Snackbar
        open={!!alertState.message}
        onClose={handleClose}
        TransitionComponent={TransitionUp}
        autoHideDuration={4000}
      >
        <Alert onClose={handleClose} severity={severity} sx={style}>
          {alertState.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
