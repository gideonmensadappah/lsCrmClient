import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStoreRootState } from "../../interfaces/redux/index";

import { Req } from "../../enums/req/req.enum";
import {
  fetchEmployees,
  addEmployee,
  deleteEmployee,
} from "../../api/employee";
import { IEmployeeSignUpInfo } from "../../interfaces/Employee/index";
import { editEmployee } from "../../api/employee";

export const fetch_employees = createAsyncThunk(
  "employees/fetch_employees",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await fetchEmployees();
      if (!data || status === Req.failed) throw data;
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { employees } = getState() as IStoreRootState;
      return employees.loading === false;
    },
  }
);

export const add_employee = createAsyncThunk(
  "employees/add_employee",
  async (employee: IEmployeeSignUpInfo, { rejectWithValue }) => {
    try {
      console.log(employee);
      const { status, data } = await addEmployee(employee);
      if (!data || status !== Req.success) throw data;
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { employees } = getState() as IStoreRootState;
      return employees.loading === false;
    },
  }
);
export const edit_employee = createAsyncThunk(
  "employees/edit_employee",
  async (employee: IEmployeeSignUpInfo, { rejectWithValue }) => {
    try {
      const { status, data } = await editEmployee(employee);
      if (!data || status !== Req.success) throw data;
      return employee;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { employees } = getState() as IStoreRootState;
      return employees.loading === false;
    },
  }
);

export const delete_employee = createAsyncThunk(
  "employees/delete_employee",
  async (_id: string, { rejectWithValue }) => {
    try {
      const { status, data } = await deleteEmployee(_id);
      if (!data || status !== Req.success) throw data;
      return _id;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { employees } = getState() as IStoreRootState;
      return employees.loading === false;
    },
  }
);
