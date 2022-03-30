import { createSlice } from "@reduxjs/toolkit";

import { singIn } from "./auth-actions";
import { IEmployeePersonalInfo } from "../../interfaces/Employee/index";

export interface AuthState {
  employee: IEmployeePersonalInfo | undefined;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  employee: undefined,
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    clearError(state) {
      return {
        ...state,
        error: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(singIn.fulfilled, (state, action) => {
      const employee = action.payload;
      state.employee = employee;
      state.loading = false;
    });
    builder.addCase(singIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(singIn.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
