import { createSelector } from "reselect";
import { IStoreRootState } from "../../interfaces/redux/index";

export const authStateSelector = (state: IStoreRootState) => state.employees;

export const employeesSelectore = createSelector(
  authStateSelector,
  (state) => state.employees
);

export const isEmployeesStateSelectorLoading = createSelector(
  authStateSelector,
  (state) => state.loading
);

export const employeesErrorStateSelector = createSelector(
  authStateSelector,
  (state) => state.error
);
