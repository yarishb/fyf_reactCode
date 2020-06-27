import * as ACTION_TYPES from '../actions/action_types'
const initialState = {
    female_choosen: false,
    male_choosen: false,


    lose_weight: false,
    get_weight: false,

    no_activity: false,
    low_activity: false,
    mid_activity: false,
    hight_activity: false,

}


const caloriesReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FEMALE_CHOOSEN:
            return{
                ...state,
                female_choosen: true,
            }
        case ACTION_TYPES.MALE_CHOOSEN:
            return{
                ...state,
                male_choosen: true,
            }
        case ACTION_TYPES.LOSE_WEIGHT:
            return{
                ...state,
                lose_weight:true,
            }
        case ACTION_TYPES.GET_WEIGHT:
            return{
                ...state,
                get_weight:true,
            }
        case ACTION_TYPES.NO_ACTIVITY:
            return{
                ...state, 
                no_activity: true,
            }
        case ACTION_TYPES.LOW_ACTIVITY:
            return{
                ...state, 
                low_activity:true,
            }
            case ACTION_TYPES.MID_ACTIVITY:
                return{
                    ...state, 
                    mid_activity:true,
                }
         case ACTION_TYPES.HIGHT_ACTIVITY:
            return{
                ...state, 
                hight_activity:true,
            }
        default:
            return state
    }
}

export default caloriesReducer;