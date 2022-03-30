export enum AlertType {
  success = "success",
  error = "error",
}

export interface IAlertState {
  type: AlertType | null;
  message: string;
}
