import "./App.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
<<<<<<< HEAD
import { HomePage } from "./pages/HomePage/HomePage";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  /*   const [jwt, setJwt] = useState(localStorage.getItem("token")); */

  return (
    <div className="App">
      <nav className="Nav">
        <h1>AppCálculo</h1>
        <button><GiHamburgerMenu /></button>
      </nav>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
=======
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { JwtContext } from "./shared/context/JwtContext";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
>>>>>>> xulio
  );
}

export default App;
