import "./App.scss";
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";
import {  useState } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { HamburgerMenu } from "./shared/components/HamburgerMenu/HamburgerMenu";
import { JwtContext } from "./shared/context/JwtContext";
import { ActivityPage } from "./pages/ActivityPage/ActivityPage";
import { ActivityList } from "./components/ActivityList/ActivityList";
import { About } from "./pages/About/About";
import { Help } from "./pages/Help/Help";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

function App() {
  const [jwt, setJwt] = useState(sessionStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <nav className="Nav">
            <h1>AppCálculo</h1>
            <HamburgerMenu />
          </nav>

          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route
                path="dashboard/activities/:_id"
                element={<ActivityPage />}
              />
              <Route path="/activities" element={<ActivityList />} />
              <Route path="/help" element={<Help />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
