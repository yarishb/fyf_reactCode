import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navBar/navbar'
//importing styles

import './main.scss'


function Main() {

 
    return (
        <>
            <div className="fullMain">
                {window.innerWidth < 700 && <Navbar />}
                <div className="navBlock">
                    <Link to="/todo"><div className='firstItem'>
                        <div className="itemText">Todo List</div>
                        <div className="itemSubText">
                            Here you can leave your targets and complete them
                        </div>
                    </div></Link>
                    <Link to="/timer"><div className="secondBlock ">
                    <div className="itemText">Timer</div>
                        <div className="itemSubText">
                            Here is the timer for your training
                        </div>
                    </div></Link>
                    <Link to="/calories-gender"><div className="secondBlock third">
                    <div className="itemText">Calories Counter</div>
                        <div className="itemSubText">
                            Here you can count how many calories you can eat daily to lose or get weight.
                        </div> </div></Link>
                   <Link to="/calories-calendar"> 
                    <div className="fourth">
                    <div className="fourthText">Calories Calendar</div>
                        <div className="itemSubText">
                            Here you can store and count food with calories you have eaten. 
                        </div>
                    </div></Link>
                    <Link to="/bmi"><div className="thirdBlock">
                    <div className="itemText">BMI calculator</div>
                        <div className="itemSubText">
                            Here you can calculate you body mass index.
                        </div>
                    </div></Link>
                </div>
            </div>
        </>
    );
}



export default Main;