import { createSlice } from "@reduxjs/toolkit";

import { IEmployeePersonalInfo } from "../../interfaces/Employee/index";
import {
  fetch_employees,
  add_employee,
  delete_employee,
} from "./employees.actions";
import { AlertType } from "../../interfaces/redux/IAlertState/index";
import { edit_employee } from "./employees.actions";

export interface EmployeeState {
  employees: Array<IEmployeePersonalInfo>;
  loading: boolean;
  error: string;
  errorType: AlertType | null;
}

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: "",
  errorType: null,
};

export const emploeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    clearError(state) {
      return {
        ...state,
        error: "",
        errorType: null,
      };
    },
  },
  extraReducers: (builder) => {
    // fetch_employees
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
    // add_employee
    builder.addCase(add_employee.fulfilled, (state, action) => {
      const employee = action.payload;
      state.employees = [employee, ...state.employees];
      state.loading = false;
      state.error = "employee was added successfully!";
      state.errorType = AlertType.success;
    });
    builder.addCase(add_employee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(add_employee.rejected, (state, action) => {
      state.error = "faild to add employee!";
      state.errorType = AlertType.error;
      state.loading = false;
    });
    // edit_employee
    builder.addCase(edit_employee.fulfilled, (state, action) => {
      const updatedEmployee = action.payload;
      state.employees = state.employees.map((employee) =>
        employee._id === updatedEmployee._id ? updatedEmployee : employee
      );
      state.loading = false;
      state.error = "employee was updated successfully!";
      state.errorType = AlertType.success;
    });
    builder.addCase(edit_employee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(edit_employee.rejected, (state, action) => {
      state.error = "faild to update employee!";
      state.errorType = AlertType.error;
      state.loading = false;
    });
    // delete_employee
    builder.addCase(delete_employee.fulfilled, (state, action) => {
      const employeeId = action.payload;
      const updatedEmployees = state.employees.filter(
        (employee) => employee._id !== employeeId
      );
      state.employees = updatedEmployees;
      state.loading = false;
      state.error = "employee was deleted successfully!";
      state.errorType = AlertType.success;
    });
    builder.addCase(delete_employee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(delete_employee.rejected, (state, action) => {
      state.error = "faild to deleted employee!";
      state.errorType = AlertType.error;
      state.loading = false;
    });
  },
});

export const emploeesAction = emploeesSlice.actions;
export default emploeesSlice.reducer;
