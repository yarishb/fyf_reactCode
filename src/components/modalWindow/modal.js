import React, {useState, useContext} from 'react';
import './modal.scss';
import {useHistory,Link} from 'react-router-dom'

//importing redux 

import * as ACTIONS from '../../store/actions/actions';
import {connect} from 'react-redux'

//importing needed dependencies

import Axios from 'axios';
import UserContext from '../../context/UserContext';
import ErrorFound from '../errorFound/errorFound';

//import SuccessfullyRegistred from '../successfullyRegistred/successfullyRegistred';

//importing other platform signIn method

import OtherSign from '../otherSign/otherSign'

//create component

function Modal(props) {

    //create states of registerW

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [success, setSuccess] = useState(false)
    const [successButton, setSuccessButton] = useState(false)
    let [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();
  
    //function that sends data to register route on backend
  
    const submit = async (e) => {
      e.preventDefault();
  
      try {
        const newUser = { email, password, passwordCheck, displayName };
        await Axios.post("https://peaceful-basin-44949.herokuapp.com/users/register", newUser);
        const loginRes = await Axios.post("https://peaceful-basin-44949.herokuapp.com/users/login", {
          emailLogin: email,
          passwordLogin: password,
        });
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/");
      } catch (err) {
          if(err.response){
              console.log(err.response);
              
            const errorCathced = err.response.data.msg
            setError(errorCathced)
            console.log(error);
            function callError ()  {props.foundError()}
            console.log(callError);
            
      }else{
          
        props.register_success()
        setSuccessButton(true)
      }
    } 
    };

    //setting timeout for closing error and success window

    error  && setTimeout(() => {
        setError(false)
    }, 2500);

    success && setTimeout(() => {
        setSuccess(false)
    }, 2500);

    //states for login

    let [errorLogin, setErrorLogin] = useState();
    const [emailLogin, setEmailLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();

    const { setUserDataLogin } = useContext(UserContext);

    //login function

    const submitLogin = async (elog) => {
        elog.preventDefault();
        try {
          const loginUserLogin = { emailLogin, passwordLogin };
          const loginResLogin = await Axios.post(
            "https://peaceful-basin-44949.herokuapp.com/users/login",
            loginUserLogin
          );
          setUserDataLogin({
            token: loginResLogin.data.token,
            user: loginResLogin.data.user,
          });
          localStorage.setItem("auth-token", loginResLogin.data.token);
          history.push("/main");
        } catch (errLogin) {
            if(errLogin.response){
                console.log(errLogin.response);
                
              const errorCathcedLogin = errLogin.response.data.msg
              setErrorLogin(errorCathcedLogin)
              console.log(errorLogin);
        }else{
            props.login_success()
            setSuccessButton(true)
        }}
      };


      //closes login error || success window

      errorLogin && setTimeout(() => {
        setErrorLogin(false)
    }, 2500)

    //component html && js

    return (
        <>
            <div className="modalFull" onClick={() => props.closed()}></div>
            <div className="modalCenter" >
                <div className={!props.loginIsOpened? "modal" : "modal loginModal"}>
                    <div className="headerModal">FEEL YOUR FIT</div>
                    <form onSubmit={!props.loginIsOpened? submit : submitLogin}>
                    {!props.loginIsOpened&&<div className="form__group field">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name1' required onChange={e => {setDisplayName(e.target.value)}}/>
                        <label for="name1" className="form__label">Name</label>
                    </div>}
                    {
                        !props.loginIsOpened?
                    <div className="form__group field">
                        <input type="email" className="form__field" placeholder="Name" name="email" id='name2' required onChange={e => {setEmail(e.target.value)}}/>
                        <label for="name2" className="form__label">Email</label>
                    </div>
                        :
                    <div className="form__group field">
                        <input type="email" className="form__field" placeholder="Name" name="email" id='name2' required onChange={elog => {setEmailLogin(elog.target.value)}}/>
                        <label for="name2" className="form__label">Email</label>
                    </div>
                    }
                    {
                        !props.loginIsOpened?
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="Name" name="password" id='name3' required onChange={e => {setPassword(e.target.value)}}/>
                        <label for="name3" className="form__label">Password</label>
                    </div>
                        :
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="Name" name="password" id='name3' required onChange={elog => {setPasswordLogin(elog.target.value)}}/>
                        <label for="name3" className="form__label">Password</label>
                    </div>
                    }
                    {!props.loginIsOpened &&
                        <div className="form__group field">
                        <input type="password" className="form__field" placeholder="Name" name="password" id='name4' required onChange={e => {setPasswordCheck(e.target.value)}}/>
                        <label for="name4" className="form__label">Confirm password</label>
                    </div>}
                    {
                        !props.loginIsOpened
                        ?
                            <div className="question" onClick={() => props.chooseLogin()}><div className="questionText">already have an account?</div>&nbsp;<div>Click to Login</div></div>
                        :
                            <div className="question reg" onClick={() => props.chooseReg()}><div className="questionText">haven't got an account yet?</div>&nbsp;<div>Click to Register</div></div>
                        }
                        {/* <div className={props.loginIsOpened? "logos log" : "logos"}>
                            <div onClick={firebase.auth()} className="google">
                                <Icon icon={googleCircleFilled}    className="googleImg"/>
                            </div>
                            <div onClick={firebase.auth()} className="google">
                                <Icon icon={facebookFilled}className="googleImg" />
                            </div>
                        </div> */}
                              {/* <StyledFirebaseAuth
                                uiConfig={uiConfig}
                                firebaseAuth={firebase.auth()}
                        /> */}
                        <OtherSign />
                    {
                        props.loginIsOpened? 
                        successButton || success?
                        <Link className="link" to="/main"><div   className="regButton login">
                             Get Started   
                        </div></Link>
                        :
                        <button type="submit"  className="regButton login">
                            LOGIN
                        </button>
                    : success || successButton?
                        <Link className="link" to="/main"><div   className="regButton">
                            Get Started   
                        </div></Link>
                    :
                        <button type="submit"  className="regButton">
                            REGISTER   
                        </button>
                    }
                        </form>
                    
                    {!props.loginIsOpened?
                        error &&
                       <ErrorFound  errorHappend = {error}/>
                       : errorLogin &&
                       <ErrorFound  errorHappend = {errorLogin}/>
                    }
                    </div>
        </div>
        </>
    );
}
//redux functions 
function mapStateToProps(state){
    return{
        loginIsOpened: state.modal.login,
        isReg: state.modal.successfully_registred
    }
}

function mapDispatchToProps(dispatch){
    return{
        closed: () => dispatch(ACTIONS.closedModal()),
        chooseLogin: () => dispatch(ACTIONS.login_switch()),
        chooseReg: () => dispatch(ACTIONS.register_switch()),
        register_success: () => dispatch(ACTIONS.successfully_registred()),
        login_success: () => dispatch(ACTIONS.successfully_loged()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);