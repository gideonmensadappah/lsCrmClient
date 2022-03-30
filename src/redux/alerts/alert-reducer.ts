import { createSlice } from "@reduxjs/toolkit";
import {
  IAlertState,
  AlertType,
} from "../../interfaces/redux/IAlertState/index";

export const initialState: IAlertState = {
  type: null,
  message: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    clearAlert(state) {
      return {
        ...state,
        message: "",
        type: null,
      };
    },

    createErrorMessage(state, action) {
      return {
        ...state,
        type: AlertType.error,
        message: action.payload.message,
      };
    },
    createSuccessMessage(state, action) {
      return {
        ...state,
        type: AlertType.success,
        message: action.payload.message,
      };
    },
  },
});
export const alertAction = alertSlice.actions;
export default alertSlice.reducer;
