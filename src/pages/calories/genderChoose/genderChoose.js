//importing react and styles

import React from 'react';
import './genderChoose.scss'

//importing  redux 

import * as ACTIONS from '../../../store/actions/actions'
import {connect} from 'react-redux'

//importing react rout links

import {Link} from 'react-router-dom'

function GenderChoose(props) {
    return (
        <>
        <div className="genderFull">
            <div className="photoGender"></div>
            <div className="mainBlockGender">
                <div className="genderHeader">FEEL YOUR FIT</div>
                <div className="chooseQuestionGender">choose your gender</div>
                <div className="chooseButtons">
                <Link className="link" to="/calories-wish"><div className="femaleChoose" onClick={() => props.female_choose()}>female</div></Link>
                <Link className="link" to="/calories-wish"><div className="maleChoose" onClick={() => props.male_choose()}>male</div></Link>
                </div>
            </div>
        </div>
        </>
    );
}


function mapStateToProps(state){return{}}

function mapDispatchToProps(dispatch){
    return{
        female_choose: () => dispatch(ACTIONS.female_choosen()),
        male_choose: () => dispatch(ACTIONS.male_choosen())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderChoose);