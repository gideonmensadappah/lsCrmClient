import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStoreRootState } from "../../interfaces/redux/index";

import { Req } from "../../enums/req/req.enum";
import { signIn } from "../../api/employee";
import { IEmployeeSignUpInfo } from "../../interfaces/Employee/index";

export const singIn = createAsyncThunk(
  "auth/getEmployees",
  async (
    { email, password }: Pick<IEmployeeSignUpInfo, "email" | "password">,
    { rejectWithValue }
  ) => {
    try {
      const { status, data } = await signIn({ email, password });
      if (!data || status === Req.failed) throw "cant log in!";
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState() as IStoreRootState;
      return auth.loading === false;
    },
  }
);
