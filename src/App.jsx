import "./App.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { GiHamburgerMenu } from "react-icons/gi";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { HamburgerMenu } from "./shared/components/HamburgerMenu/HamburgerMenu";
import { JwtContext } from "./shared/context/JwtContext";
import { ActivityPage } from "./pages/ActivityPage/ActivityPage";
import { ActivityList } from "./components/ActivityList/ActivityList";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
      <nav className="Nav">
        <h1>AppCálculo</h1>
        {/*         <HamburgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
        <button>
          <GiHamburgerMenu />
        </button>
        {/* <HamburgerMenu /> */}
      </nav>
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />git 
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="dashboard/activities/:_id" element={<ActivityPage />} />
              <Route path="/activities" element={<ActivityList />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
