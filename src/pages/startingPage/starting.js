import React from 'react';
import './starting.scss'
import * as ACTIONS from '../../store/actions/actions'
import {connect} from 'react-redux'
import Modal from '../../components/modalWindow/modal';

function Starting(props) {
    return (
        <>
        <div className="fullPage" >
            {props.open && <Modal />}
            <div className="textBlock" >
                <div className="header">
                    FEEL YOUR FIT
                </div>
                <div className="subheading">
                   keep your body in the best shape
                </div>
                <div className="getStarted" onClick={() => {props.opened()}}>
                    Get started
                </div>
           </div>
             <div className="photoBlock"></div>
        </div>

     </>
    );
}

function mapStateToProps(state){
    return{
        open: state.modal.opened,
    }
}

function mapDispatchToProps(dispatch){
    return{
        opened: () => dispatch(ACTIONS.openedModal()),
        closed: () => dispatch(ACTIONS.closedModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Starting);