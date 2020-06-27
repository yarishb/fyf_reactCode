import React from 'react';
import './errorFound.scss'

function ErrorFound(props) {
    return (
        <>
            <div className="errorBox">
                <div className="foundErrorText">{props.errorHappend}</div>
            </div>
        </>
    );
}

export default ErrorFound;