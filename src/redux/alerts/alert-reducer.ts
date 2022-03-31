import { createSlice } from "@reduxjs/toolkit";
import { IAlertState } from "../../interfaces/redux/IAlertState/index";

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
        type: null,
        message: "",
      };
    },

    createMessage(state, action) {
      const { message, type } = action.payload;
      return {
        ...state,
        type,
        message,
      };
    },
  },
});
export const alertAction = alertSlice.actions;
export default alertSlice.reducer;
