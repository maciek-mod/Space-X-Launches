import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/events';
import Loading from "../common/loading";



// function scroll() {
//     let height = window.scrollY;
//     let menu = document.querySelector("header");
//     if (height > 60) {
//         console.log("dodawaj");
//         menu.classList.add('slide');
//     } else {
//         console.log("-");
//         menu.classList.remove('slide');
//     }
// }
// window.onscroll = scroll;
// scroll();

class Events extends React.Component {

    componentDidMount() {
        this.props.getEvents();
    }

    chooseLaunch(event){
        const id = event.target.value;
        window.location.href = '/launche/' + id;
    }

    render() {
        return(
            <Loading isLoading={this.props.eventsStore.isLoading}>
            { this.props.eventsStore.isLoading === false && this.props.eventsStore.data.length > 0
                ?
                    <div className="choose_view">
                        <div className="container">
                            <h2>Choose the flight number</h2>
                            <select onChange={this.chooseLaunch}>
                                <option value="" selected disabled hidden>Choose here</option>
                                {
                                    console.log(this.props.eventsStore.data),
                                    this.props.eventsStore.data.map((item) => {
                                        return <option key={item.launch_date_unix} value={item.flight_number}>{item.flight_number}</option>;
                                    })
                                }
                            </select>
                        </div>
                    </div>
                :
                    <div className="container">
                        <p>Choose another number</p>
                    </div>
                }
            </Loading>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(actions.getEvents())
        // getEvents: (day) => dispatch(actions.getEvents(day))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
