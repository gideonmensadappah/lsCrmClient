import { Response } from "../interfaces/api";
import { POST, GET, DELETE, PATCH } from "./api-requests";
import { URLS } from "./api-urls";
import {
  IEmployeeSignUpInfo,
  IEmployeePersonalInfo,
} from "../interfaces/Employee/index";

export const signIn = async (
  userData: Pick<IEmployeeSignUpInfo, "email" | "password">
): Promise<Response<IEmployeePersonalInfo>> => {
  const { data, status } = await POST(URLS.AUTHENTICATE, { ...userData });
  return { data, status };
};
export const fetchEmployees = async (): Promise<
  Response<IEmployeePersonalInfo[]>
> => {
  const { data, status } = await GET(URLS.EMPLOYEE);
  return { data, status };
};
// addEmployee
export const addEmployee = async (
  userData: IEmployeeSignUpInfo
): Promise<Response<IEmployeePersonalInfo>> => {
  const { retypePassword, ...rest } = userData;
  const { data, status } = await POST(URLS.EMPLOYEE, { ...rest });
  return { data, status };
};

// editEmployee
export const editEmployee = async (
  userData: IEmployeeSignUpInfo
): Promise<Response<IEmployeePersonalInfo>> => {
  const { retypePassword, ...rest } = userData;
  const { data, status } = await PATCH(`${URLS.EMPLOYEE}/${rest._id}`, {
    ...rest,
  });
  return { data, status };
};
// deleteEmployee
export const deleteEmployee = async (
  _id: string
): Promise<Response<string>> => {
  const { data, status } = await DELETE(`${URLS.EMPLOYEE}/${_id}`);
  return { data, status };
};
