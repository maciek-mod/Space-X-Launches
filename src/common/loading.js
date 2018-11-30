import React from 'react';

const Loading = (props) => {
    if (props.isLoading) {
        return(
            <div id="loader">
                loading
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
