export type Roll = "Admin" | "HR" | "DEV" | "NO ROLL" | "";

export type IEmployeePersonalInfo = {
  _id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  roll: Roll;
  img?: string;
  createdAt?: string;
};

export interface IEmployeeSignUpInfo extends IEmployeePersonalInfo {
  email: string;
  password: string;
  retypePassword: string;
  language: string;
}
