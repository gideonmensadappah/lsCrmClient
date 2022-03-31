import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ContentWrapper } from "./components/ContentWrapper";
import { Header } from "./components/Header";
import { routes } from "./utils/Routes";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useSelector } from "react-redux";
import { connectedUserStateSelector } from "./redux/auth/auth-selector";
import React from "react";
import { Path } from "./interfaces/Routes";
import { Login } from "./screens/Login/index";
import { ManageEmployeesScreen } from "./screens/ManagingEmployees/index";
import { Register } from "./screens/Register/index";

const config = {
  apiKey: "AIzaSyBf3j0I8Tc-hCBZJZv7C8lWB9g8Qy77LRo",
  authDomain: "lscrm-3f251.firebaseapp.com",
};

const firbaseApp = firebase.initializeApp(config);
function App() {
  const connectedEmployee = useSelector(connectedUserStateSelector);

  return (
    <div className='App'>
      <Router>
        <Header />

        <ContentWrapper>
          <Routes>
            <Route
              index
              element={
                !connectedEmployee ? (
                  <Navigate replace to={Path.login} />
                ) : (
                  <ManageEmployeesScreen />
                )
              }
            />
            <Route
              path={Path.manageEmployee}
              element={
                !connectedEmployee ? (
                  <Navigate replace to={Path.login} />
                ) : (
                  <ManageEmployeesScreen />
                )
              }
            />
            <Route path={Path.register} element={<Register />} />
            <Route path='*' element={<Login />} />
          </Routes>
        </ContentWrapper>
      </Router>
    </div>
  );
}

export default App;
