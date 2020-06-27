import modalReducer from './modalReducer';
import caloriesReducer from './caloriesReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    modal: modalReducer,
    calories: caloriesReducer,
})

export default rootReducer