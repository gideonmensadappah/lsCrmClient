import { IEmployeePersonalInfo } from "../Employee/index";
import { IAlertState } from "./IAlertState/index";
import { AuthState } from "../../redux/auth/auth-reducer";
import { EmployeeState } from "../../redux/employees/employees.reducer";

export interface IStoreRootState {
  alert: IAlertState;
  auth: AuthState;
  employees: EmployeeState;
}

export interface IActionError {
  error: { message: string };
  meta: any;
  payload: {
    status: number;
    error: string;
    field: string;
  };
}
