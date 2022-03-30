export enum Path {
  login = "/login",
  register = "/register",
  manageEmployee = "/manage-employees",
  default = "*",
}

export type Route = {
  Element: any;
  path: Path;
  exact?: boolean;
};
