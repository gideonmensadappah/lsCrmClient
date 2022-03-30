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

export const authErrorStateSelector = createSelector(
  authStateSelector,
  (state) => state.error
);
