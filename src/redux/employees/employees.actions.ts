import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStoreRootState } from "../../interfaces/redux/index";

import { Req } from "../../enums/req/req.enum";
import { fetchEmployees } from "../../api/employee";

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
