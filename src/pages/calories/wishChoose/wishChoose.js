//importing react and stylesheet
import React from 'react';
import './wishChoose.scss'

//importing Redux 

import * as ACTIONS from '../../../store/actions/actions'
import {connect} from 'react-redux'

//importing react rout links

import {Link} from 'react-router-dom'

function WishChoose(props) {
    return (
        <>
        <div className="wishesPhoto"></div>
            <div className="fullWishesPage">
                <div className="wishesHeader">FEEL YOUR FIT</div>
                <div className="wishTarget">choose your target</div>
                <div className="wishOptions">
                    <Link  className="link" to="/calories-activity"><div onClick={() => props.lose_weight()} className="wishButton">
                        lose weight
                    </div></Link>
                    <Link className="link" to="/calories-activity"><div onClick={() => props.get_weight()} className="wishButton">
                        get weight
                    </div></Link>
                </div>
            </div>
        </>
    );
}


function mapStateToProps(state){return{}}

function mapDispatchToProps(dispatch){
    return{
        lose_weight: () => dispatch(ACTIONS.lose_weight()),
        get_weight: () => dispatch(ACTIONS.get_weight())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishChoose);