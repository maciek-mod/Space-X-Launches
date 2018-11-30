import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/launches';
import Loading from '../common/loading';


class Launches extends React.Component{

    getIdEvent() {
        const id = this.props.match.params.launcheId;
        return id;
    }
    componentDidMount() {
        let idlaunches = this.getIdEvent();
        this.props.getLanuches(idlaunches);
    }

    render(){
        return (
            <Loading isLoading={this.props.launchesStore.isLoading}>
                <div className="container">
                    <p>numer id lotu:{this.getIdEvent()}</p>
                    {this.props.launchesStore.data !== null
                        ?
                        <img src={this.props.launchesStore.data.links.flickr_images[0]}  alt="photo"/>
                        :
                        null
                    }
                </div>
            </Loading>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLanuches: (launchesNumber) => dispatch(actions.getLanuches(launchesNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
