import React from 'react';
import PropTypes from 'prop-types';

const LanuchesSocial = (props) => {
    return(
        <div className="container">
            <h2>Links</h2>
            <div className="social_box">
                {props.articleLink !== null && props.articleLink !== undefined
                    ?
                    <a href={props.articleLink} target="_blank">Article</a>
                    :
                    null
                }
                {props.youtubeLink !== undefined && props.youtubeLink !== null
                    ?
                    <a href={props.youtubeLink} target="_blank">Youtube</a>
                    :
                    null
                }

                {props.redditLink !== undefined && props.redditLink !== null
                    ?
                    <a href={props.redditLink} target="_blank">Reddit</a>
                    :
                    null
                }

                {props.wikipediaLink !== undefined && props.wikipediaLink !== null
                    ?
                    <a href={props.wikipediaLink} target="_blank">Wikipedia</a>
                    :
                    null
                }
                {props.telemetry !== null
                    ?
                    <a href={props.telemetry} target="_blank">Telemetry</a>
                    :
                    null
                }

            </div>
        </div>
    );
};

LanuchesSocial.propTypes = {
    articleLink: PropTypes.string,
    youtubeLink: PropTypes.string,
    redditLink: PropTypes.string,
    wikipediaLink: PropTypes.string,
};

export default LanuchesSocial;
