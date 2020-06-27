import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    opened: false,
    login: false,
    registred_successfully:true,
    loged_successfully:true,
}


const modalReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.OPENED_MODAL:
            return{
                ...state,
                opened: true
            }
        case ACTION_TYPES.CLOSED_MODAL:
            return{
                ...state,
                opened:false
            }
        case ACTION_TYPES.LOGIN_SWITCH:
            return{
                ...state,
                login: true
            }
        case ACTION_TYPES.REGISTER_SWITCH:
            return{
                ...state,
                login: false
            }
        case ACTION_TYPES.REGISTRED:
            return{
                ...state,
                registred_successfully: true
            }
        case ACTION_TYPES.LOGED:
            return{
                ...state,
                loged_successfully:true
            }
        default:
            return state
    }
}

export default modalReducer