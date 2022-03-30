import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ContentWrapper } from "./components/ContentWrapper";
import { Header } from "./components/Header";
import { routes } from "./utils/Routes";

function App() {
  return (
    <div className='App'>
      <Header />

      <ContentWrapper>
        <Router>
          <Routes>
            {routes.map(({ Element, ...rest }, key) => (
              <Route
                key={`${key}-${rest.path}`}
                {...rest}
                element={<Element />}
              />
            ))}
          </Routes>
        </Router>
      </ContentWrapper>
    </div>
  );
}

export default App;
