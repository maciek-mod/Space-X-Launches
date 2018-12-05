import React from 'react';

const Loading = (props) => {
    if (props.isLoading) {
        return(
            <div id="loader">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    } else{
        return(
            <div>
                {props.children}
            </div>
        )
    }
};


export default Loading;
