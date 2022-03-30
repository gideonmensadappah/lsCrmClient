import { createSlice } from "@reduxjs/toolkit";

import { IEmployeePersonalInfo } from "../../interfaces/Employee/index";
import { employees } from "../../screens/Employees/mock";
import { fetch_employees } from "./employees.actions";

export interface EmployeeState {
  employees: Array<IEmployeePersonalInfo>;
  loading: boolean;
  error: string;
}

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: "",
};

export const emploeesSlice = createSlice({
  name: "employees",
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
    builder.addCase(fetch_employees.fulfilled, (state, action) => {
      const employees = action.payload;
      state.employees = employees;
      state.loading = false;
    });
    builder.addCase(fetch_employees.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetch_employees.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });
  },
});

export const emploeesAction = emploeesSlice.actions;
export default emploeesSlice.reducer;
