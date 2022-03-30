import { Route, Path } from "../../interfaces/Routes";
import { Login } from "../../screens/Login";
import { ManageEmployeesScreen } from "../../screens/ManagingEmployees";
import { Register } from "../../screens/Register";

export const routes: Route[] = [
  { Element: Login, path: Path.default },
  { Element: Register, path: Path.register },
  { Element: ManageEmployeesScreen, path: Path.manageEmployee },
];
