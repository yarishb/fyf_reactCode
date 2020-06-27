import React from 'react';
import './navbar.scss'
import {Link} from 'react-router-dom';


function Navbar(props) {
    return (
        <div>
           <input type="checkbox" id="main-navigation-toggle" class="btn btn--close" title="Toggle main navigation" />
<label for="main-navigation-toggle">
  <span></span>
</label>

<nav id="main-navigation" class="nav-main">
  <ul class="menu">
    <li class="menu__item">
      <Link class="menu__link" to="/main">Main</Link>
    </li>
    <li class="menu__item">
      <Link class="menu__link" to="/bmi">BMI calculator</Link>
    </li>
    <li class="menu__item">
      <Link class="menu__link" to="/todo">TODO List</Link>
    </li>
    <li class="menu__item">
      <Link class="menu__link" to="/calories-gender">Calories counter</Link>
    </li>
    <li class="menu__item">
      <Link class="menu__link" to="/calories-calendar">Calories calendar</Link>
    </li>
    <li class="menu__item">
      <Link class="menu__link" to="/timer">Timer</Link>
    </li>
        </ul>
    </nav>
        </div>
    );
}

export default Navbar;