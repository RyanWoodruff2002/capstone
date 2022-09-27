import React, {useState, useEffect} from "react";
import Auth from "./components/Auth";
import AllAnimals from "./components/AllAnimals";
import MyAnimals from "./components/MyAnimals";
import MyAccount from "./components/MyAccount";
import Navbar from "./components/Navbar";

import { Routes, Route, useNavigate } from "react-router-dom";
// import LoginForm from "./components/LoginForm";

function App() {

  const [animalArray, setAnimalArray] = useState([])

  useEffect(() => {
    fetch("/animals").then((res) => {
      res.json().then((data) => {
        setAnimalArray(data)
      })
    })
  }, [])

  const navigate = useNavigate()

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
          <Route path='/allanimals' element={<AllAnimals currentUser={currentUser} animalArray={animalArray} />} />
          <Route path='/myanimals' element={<MyAnimals currentUser={currentUser}/>} />
          <Route path ='/myaccount' element ={<MyAccount currentUser={currentUser} setIsAuthenticated={setIsAuthenticated} rerender={rerender} setCurrentUser={setCurrentUser} />} />
        </Routes>
    </div>
  );
};

export default App;
