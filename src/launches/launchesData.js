import React from 'react';
import PropTypes from 'prop-types';

const LanuchesData = (props) => {
    return(
        <div className="data_container">

            <div className="row_data">
                <div className="container">
                    <div className="data_left">
                        Mission name:
                    </div>
                    <div className="data_right">
                        {props.missionName}
                    </div>
                </div>
            </div>

            <div className="row_data">
                <div className="container">
                    <div className="data_left">
                        Site name:
                    </div>
                    <div className="data_right">
                        {props.siteNameLong}
                    </div>
                </div>
            </div>

            <div className="row_data">
                <div className="container">
                    <div className="data_left">
                        Flight number:
                    </div>
                    <div className="data_right">
                        {props.numberId}
                    </div>
                </div>
            </div>

            <div className="row_data">
                <div className="container">
                    <div className="data_left">
                        Launch date utc:
                    </div>
                    <div className="data_right">
                        {props.launchDateUtc}
                    </div>
                </div>
            </div>

            <div className="row_data">
                <div className="container">
                    <div className="data_left">
                        Rocket name:
                    </div>
                    <div className="data_right">
                        {props.rocketName}
                    </div>
                </div>
            </div>

            <div className="row_data">
                <div className="container">
                    <div className="data_left">
                        Details:
                    </div>
                    <div className="data_right">
                    {props.details !== null
                        ?
                        props.details
                        :
                        "-"
                    }
                    </div>
                </div>
            </div>

            <div className="row_data">
                <div className="container">
                    <div className="data_left">
                        Mission patch:
                    </div>
                    <div className="data_right">
                        <img src={props.missionPatch}  alt="patch"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

LanuchesData.propTypes = {
    missionName: PropTypes.string.isRequired,
    siteNameLong: PropTypes.string.isRequired,
    numberId: PropTypes.string.isRequired,
    launchDateUtc: PropTypes.string.isRequired,
    rocketName: PropTypes.string.isRequired,
    // details: PropTypes.string.isRequired,

};

export default LanuchesData;
