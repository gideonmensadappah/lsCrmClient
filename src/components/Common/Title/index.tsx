import { FC } from "react";
import Typography from "@mui/material/Typography";

export const Title: FC = ({ children }) => (
  <Typography
    fontWeight='bold'
    id='transition-modal-title'
    variant='h6'
    component='h2'
  >
    {children}
  </Typography>
);
