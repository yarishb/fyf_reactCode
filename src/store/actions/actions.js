import * as ACTION_TYPES from './action_types'

//modal and register actions

export const openedModal = () => {
    return {
        type: ACTION_TYPES.OPENED_MODAL
    }
}

export const closedModal = () => {
    return {
        type: ACTION_TYPES.CLOSED_MODAL
    }
}

export const login_switch = () => {
    return{
        type: ACTION_TYPES.LOGIN_SWITCH
    }
}
export const register_switch = () => {
    return{
        type: ACTION_TYPES.REGISTER_SWITCH
    }
}

export const successfully_registred = () => {
    return {
        type: ACTION_TYPES.REGISTRED
    }
}
export const successfully_loged = () => {
    return {
        type: ACTION_TYPES.LOGED
    }
}


//calories counter actions


export const female_choosen = () => {
    return{
        type: ACTION_TYPES.FEMALE_CHOOSEN
    }
}

export const male_choosen = () => {
    return{
        type: ACTION_TYPES.MALE_CHOOSEN
    }
}

export const lose_weight = () => {
    return{
        type: ACTION_TYPES.LOSE_WEIGHT
    }
}

export const get_weight = () => {
    return{
        type: ACTION_TYPES.GET_WEIGHT
    }
}

export const no_activity = () => {
    return{
        type: ACTION_TYPES.NO_ACTIVITY
    }
}
export const low_activity = () => {
    return{
        type: ACTION_TYPES.LOW_ACTIVITY
    }
}
export const mid_activity = () => {
    return{
        type: ACTION_TYPES.MID_ACTIVITY
    }
}
export const hight_activity = () => {
    return{
        type: ACTION_TYPES.HIGHT_ACTIVITY
    }
}