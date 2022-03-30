import { createSelector } from "reselect";
import { IStoreRootState } from "../../interfaces/redux/index";

export const debriefStateSelector = (state: IStoreRootState) => state.alert;

export const alertStateSelector = createSelector(
  debriefStateSelector,
  (state) => state
);
