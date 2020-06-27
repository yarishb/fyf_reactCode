import React, {useState, useEffect} from 'react';
import Starting from './pages/startingPage/starting';
import Axios from 'axios';
//import Modal from './components/modalWindow/modal';
import UserContext from './context/UserContext'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './pages/mainPage/main';
import Todo from './pages/todoList/todo'
import Bmi from './pages/bmiCalculator/bmi'
import GenderChoose from './pages/calories/genderChoose/genderChoose';
import WishChoose from './pages/calories/wishChoose/wishChoose';
import CaloriesCounter from './pages/calories/caloriesCounter/caloriesCounter';
import CaloriesActivity from './pages/calories/caloriesActivity/caloriesActivity';
import CaloriesCalendar from './pages/caloriesCalendar/caloriesCalendar';
import Timer from './pages/timer/timer';
import Navbar from './components/navBar/navbar';

function App(){
const [userData, setUserData] = useState({
  token: undefined,
  user: undefined,
});

useEffect(() => {
  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenRes = await Axios.post(
      "https://peaceful-basin-44949.herokuapp.com//users/tokenIsValid",
      null,
      { headers: { "x-auth-token": token } }
    );
    if (tokenRes.data) {
      const userRes = await Axios.get("https://peaceful-basin-44949.herokuapp.com//users/", {
        headers: { "x-auth-token": token },
      });
      setUserData({
        token,
        user: userRes.data,
      });
    }
  };

  checkLoggedIn();
}, []);

  return (
    <Router>
      <UserContext.Provider value={userData}>
        <Switch>
          <Route exact path={"/"}  component={Starting}/>
          <Route  path={"/main"} component={Main}/>
          <Route  path ={"/todo"} component={Todo}/>
          <Route path={"/bmi"} component={Bmi}/>
          <Route path={"/calories-gender"} component={GenderChoose}/>
          <Route path={"/calories-wish"} component={WishChoose}/>
          <Route path={"/calories-activity"} component={CaloriesActivity}/>
          <Route path={"/calories-counter"} component={CaloriesCounter}/>
          <Route path={"/calories-calendar"} component={CaloriesCalendar}/>
          <Route path={"/timer"} component={Timer}/>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}


export default App; 
