import React, {useState, useEffect} from "react";
import Auth from "./components/Auth";
import AllAnimals from "./components/AllAnimals";
import MyAnimals from "./components/MyAnimals";
import MyAccount from "./components/MyAccount";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import LoginForm from "./components/LoginForm";

function App() {

  const navigate = useNavigate()

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser)

  function rerender() {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  if (!isAuthenticated) {
    return (
    <Auth navigate={navigate} rerender={rerender} setCurrentUser={setCurrentUser} />
    );
  }
  return (
    <div className="app">
        <Navbar />
        <Routes>
          <Route path='/allanimals' element={<AllAnimals />} />
          <Route path='/myanimals' element={<MyAnimals />} />
          <Route path ='/myaccount' element ={<MyAccount setIsAuthenticated={setIsAuthenticated} rerender={rerender} setCurrentUser={setCurrentUser} />} />
        </Routes>
    </div>
  );
};

export default App;
