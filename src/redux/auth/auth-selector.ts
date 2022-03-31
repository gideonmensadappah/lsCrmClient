import { createSelector } from "reselect";
import { IStoreRootState } from "../../interfaces/redux/index";

export const authStateSelector = (state: IStoreRootState) => state.auth;

export const connectedUserStateSelector = createSelector(
  authStateSelector,
  (state) => state.employee
);

export const isAuthStateSelectorLoading = createSelector(
  authStateSelector,
  (state) => state.loading
);

export const authMessageStateSelector = createSelector(
  authStateSelector,
  (state) => state.error
);

export const authMessageTypeStateSelector = createSelector(
  authStateSelector,
  (state) => state.errorType
);

export const authenticatedEmployee = createSelector(
  authStateSelector,
  (state) => state.employee
);
