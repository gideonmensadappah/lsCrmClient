import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AlertType } from "../interfaces/redux/IAlertState";
import { Path } from "../interfaces/Routes";
import { alertAction } from "../redux/alerts/alert-reducer";
type UseAuth = {
  authMeeage: string;
  authErrorType: AlertType | null;
  clearSource: ActionCreatorWithoutPayload<string>;
};
export const useAuth = ({
  authMeeage,
  authErrorType,
  clearSource,
}: UseAuth) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createMessage } = alertAction;

  useEffect(() => {
    if (authMeeage) {
      console.log(authErrorType);
      dispatch(createMessage({ message: authMeeage, type: authErrorType }));
      dispatch(clearSource());
      if (authErrorType === AlertType.success) navigate(Path.manageEmployee);
    }
  }, [authMeeage, authErrorType]);
};
