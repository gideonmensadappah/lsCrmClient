import { createSlice } from "@reduxjs/toolkit";

import { singIn } from "./auth-actions";
import { IEmployeePersonalInfo } from "../../interfaces/Employee/index";
import { AlertType } from "../../interfaces/redux/IAlertState";

export interface AuthState {
  employee: IEmployeePersonalInfo | undefined;
  loading: boolean;
  error: string;
  errorType: AlertType | null;
}

const initialState: AuthState = {
  employee: undefined,
  loading: false,
  error: "",
  errorType: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      return {
        ...state,
        error: "",
        errorType: null,
      };
    },
    singOutUser: (state) => {
      return {
        ...state,
        employee: undefined,
        errorType: AlertType.success,
        error: "SignOut successfully!",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(singIn.fulfilled, (state, action) => {
      console.log(action);
      const employee = action.payload;
      state.employee = employee;
      state.loading = false;
      state.error = "Logged In successfully!";
      state.errorType = AlertType.success;
    });
    builder.addCase(singIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(singIn.rejected, (state, action) => {
      state.error = "Authentication was faild!"!;
      state.errorType = AlertType.error;
      state.loading = false;
    });
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
