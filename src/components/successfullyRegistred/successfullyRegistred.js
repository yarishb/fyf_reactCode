import React from 'react';
import './successfullyRegistred.scss'

function SuccessfullyRegistred(props) {
    return (
        <>
            <div className="success">
                <div className="successText">You have successfully {props.someState}!</div>
            </div>
        </>
    );
}

export default SuccessfullyRegistred;