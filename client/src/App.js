import React, {useState, useEffect} from "react";
import Auth from "./components/Auth";
import AllGames from "./components/AllGames";
import MyList from "./components/MyList";
import MyAccount from "./components/MyAccount";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {

  const [gameArray, setGameArray] = useState([])

  useEffect(() => {
    fetch("/games").then((res) => {
      res.json().then((data) => {
        setGameArray(data)
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
          <Route path='/allgames' element={<AllGames currentUser={currentUser} gameArray={gameArray} />} />
          <Route path='/mylist' element={<MyList currentUser={currentUser}/>} />
          <Route path ='/myaccount' element ={<MyAccount currentUser={currentUser} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser} />} />
        </Routes>
    </div>
  );
};

export default App;
