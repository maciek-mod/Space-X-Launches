import React from 'react';
import PropTypes from 'prop-types';

const LanuchesData = (props) => {
    return(
        <div className="data_flex">

            <div className="data_left">
                Mission name:
            </div>
            <div className="data_right">
                {props.missionName}
            </div>

            <div className="data_left">
                Site name:
            </div>
            <div className="data_right">
                {props.siteNameLong}
            </div>

            <div className="data_left">
                Flight number:
            </div>
            <div className="data_right">
                {props.numberId}
            </div>

            <div className="data_left">
                Launch date utc:
            </div>
            <div className="data_right">
                {props.launchDateUtc}
            </div>

            <div className="data_left">
                Rocket name:
            </div>
            <div className="data_right">
                {props.rocketName}
            </div>

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
