import React, { useState } from 'react';
import './timer.scss'
import Navbar from '../../components/navBar/navbar';


function Timer(props) {

    let[number, setNumber] = useState(60)
    const[showOther, setShowOther] = useState(true)
    const[rising, setRising] = useState(false)


    if(!showOther){
        if(!rising){
        if(number !== -1){
            setTimeout(() => {
                setNumber(number - 1)
            },1000)
            }
        }else if(rising){
                setTimeout(() => {
                    setNumber(number + 1)
                },1000)
        }
    }


    return (
        <>
            <Navbar />
            <div className="timerFullPage"></div>
            <div className="rightSide">
                <div className="decoration"></div>
                <div className="timerHeader">FEEL YOUR FIT
                <div className="timerSubtitle">
                    timer
                    </div>
                </div>
            </div>
            <div className="buttonsTimer">
            <div className="buttonTimer" onClick={
                () => {
                    setRising(true);
                    setShowOther(false)
                }
            }>
                    RISING TIMER
                </div>
                <div className="buttonTimer" onClick={
                () => {
                    setRising(false)
                }
            }>
                    COUNTDOWN TIMER
                </div>
            </div>

            <div className="timer">
            <div className="timeAddBlock">
            <button className={showOther?"addTime": "none"} onClick={() => setNumber(number+1)}>+</button>
            <button className={showOther?"addTime less": "none"} onClick={() => setNumber(number-1)}>-</button></div>
            <div className={showOther?"timerUp": "none"}>
                {number+1}
            </div>
               {number}
               <div className={showOther?"timerDown": "none"}>
                {number-1}
            </div>
            <div onClick={() => setShowOther(!showOther)} className="timerStart">
                {showOther? "start" : "stop"}
            </div>
            </div>
            
        </>
    );
}

export default Timer;