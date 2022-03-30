import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./alerts/alert-reducer";
import authReducer from "./auth/auth-reducer";
import employeesReducer from "./employees/employees.reducer";

export default configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    employees: employeesReducer,
  },
});
