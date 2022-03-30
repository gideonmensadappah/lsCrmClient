import { FC } from "react";

import { makeStyles } from "@mui/styles";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import { Theme } from "@mui/material";

type CustomizedModalProp = {
  open: boolean;
  displayBg?: boolean;
  handleClose: () => void;
  Element: React.ReactElement;
};

export const CustomizedModal: FC<CustomizedModalProp> = (props) => {
  const { handleClose, open, Element, displayBg } = props;
  const classes = useStyles({ displayBg });

  return (
    <Modal
      className={classes.modal}
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {Element}
    </Modal>
  );
};

const useStyles = makeStyles<Theme & { displayBg?: boolean }>({
  modal: {
    "@media only screen and (max-width: 600px)": {
      "& > div": {
        position: ({ displayBg }: any) => (displayBg ? "" : "static"),
        overflowY: "auto",
      },
    },
  },
});
