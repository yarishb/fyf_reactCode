import React from 'react';
import './elements.scss'
const  Elements = ({data}) => {
    return (
        <div>
            {
                data.map(res => {
                    return(
                        <div className="element">
                            <div className="foodFound">
                                <div className="explain">food:</div><div>{res.food}</div>                             
                                <div className="explain explainCalories">
                                    calories:
                            </div>
                            <div>{res.foodCalories}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    );
}

export default Elements;