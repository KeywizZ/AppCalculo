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
import { JwtContext } from "./shared/context/JwtContext";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
