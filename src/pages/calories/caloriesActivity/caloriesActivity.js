//importing react and styles

import React from 'react';
import './caloriesActivity.scss'

//importing  redux 

import * as ACTIONS from '../../../store/actions/actions'
import {connect} from 'react-redux'

//importing react rout links
import {Link} from 'react-router-dom'


function CaloriesActivity(props) {
    return (
        <>
        <div className="activityPhoto"></div>
        <div className="fullActivityText">
            <div className="genderHeader activityHeader">FEEL YOUR FIT</div>
            <div className="chooseQuestionGender activity">choose your activity</div>
            <div className="activityButtons">
                <div className="pair">
                <Link  className="link" to="/calories-counter"><div onClick={() => props.no_activity()} className="button small">
                    no activity
                </div></Link>
                <Link className="link" to="/calories-counter"><div onClick={() => props.low_activity()} className="button change">
                    1-2 days per week
                </div></Link>
                </div>
                <div className="pair">
                <Link className="link" to="/calories-counter"><div onClick={() => props.mid_activity()} className="button">
                    3-5 days per week
                </div></Link>
                <Link className="link" to="/calories-counter"><div onClick={() => props.hight_activity()} className="button small">
                    every day
                </div></Link>
                </div>
            </div>
        </div>
        </>
    );
}
function mapStateToProps(state){return{}}

function mapDispatchToProps(dispatch){
    return{
        no_activity: () => dispatch(ACTIONS.no_activity()),
        low_activity: () => dispatch(ACTIONS.low_activity()),
        mid_activity: () => dispatch(ACTIONS.mid_activity()),
        hight_activity: () => dispatch(ACTIONS.hight_activity()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaloriesActivity);