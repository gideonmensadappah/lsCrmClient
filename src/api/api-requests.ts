import axios from "axios";
import baseUrl from "./base-url";
import { Req } from "../enums/req/req.enum";
import { getItem } from "../utils/localStorage";

let ip: string;

if (process.env.REACT_APP_STATE === "production")
  ip = process.env.REACT_APP_PRODUCTION_URL!;
else if (process.env.REACT_APP_STATE === "staging") ip = baseUrl.staging;
else ip = process.env.REACT_APP_BASE_URL!;

export const POST = async <T>(url: string, body: unknown) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.post<T>(`${ip}${url}`, body, authHeaders)
  ).data;
};

export const PUT = async <T>(url: string, body: unknown) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.put<T>(`${ip}${url}`, body, authHeaders)
  ).data;
};

export const GET = async <T>(url: string) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.get<T>(`${ip}${url}`, authHeaders)
  ).data;
};

export const PATCH = async <T>(url: string, body: unknown) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.patch<T>(`${ip}${url}`, body, authHeaders)
  ).data;
};

export const DELETE = async <T>(url: string) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.delete<T>(`${ip}${url}`, authHeaders)
  ).data;
};
const getAuthorizationHeaders = () => {
  const token = getItem(Req.token) ?? "";
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
