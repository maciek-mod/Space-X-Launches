import React from 'react';
import PropTypes from 'prop-types';

const LanuchesGallery = (props) => {
    return(
        <div className="container">
            <h2>Gallery</h2>
            <div className="lanuches_gallery">
                {props.lanuchesGallery.length > 0
                    ?
                    props.lanuchesGallery.map( (item, key) => {
                        return <img onClick={props.showFull} src={item} key={key}  alt="photo"/>
                    })
                    :
                    "-"
                }
            </div>
        </div>
    );
};

LanuchesGallery.propTypes = {
    lanuchesGallery: PropTypes.array.isRequired,
    // siteNameLong: PropTypes.string.isRequired,
    // numberId: PropTypes.string.isRequired,
    // launchDateUtc: PropTypes.string.isRequired,
    // rocketName: PropTypes.string.isRequired,
    // details: PropTypes.string.isRequired,

};

export default LanuchesGallery;
