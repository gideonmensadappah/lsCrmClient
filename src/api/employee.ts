import { Response } from "../interfaces/api";
import { POST, GET } from "./api-requests";
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
