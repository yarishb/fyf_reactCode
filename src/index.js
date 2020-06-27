import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import rootReducer from './store/reducers/';
import { createStore } from 'redux'

let store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//IMPLOMENT TODOLIST !DONE
//ADD BMI COUNTER !DONE
//ADD CALORIES COUNTER DEPENDING ON YOUR WISHES(BE LIGHTER/HEAVIER) !DONE
//ADD COUNTER WITH THE LEFT CALORIES !DONE
//ADD TIMER !DONE
//ADD MAIN PAGE 


//-----------------------------------------------

//ADD WATER COUNTER !IDEA IS STOPED FOR SOME TIME
//ADD DONATION AREA !IDEA IS STOPED CZ IT IS NOT NEEDED