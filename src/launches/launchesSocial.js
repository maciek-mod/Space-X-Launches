import React from 'react';
import PropTypes from 'prop-types';

const LanuchesSocial = (props) => {
    return(
        <div className="social_box">
            {props.articleLink !== undefined
                ?
                <a href={props.articleLink} target="_blank">Article</a>
                :
                null
            }
            {props.youtubeLink !== undefined
                ?
                <a href={props.youtubeLink} target="_blank">Youtube</a>
                :
                null
            }

            {props.redditLink !== undefined
                ?
                <a href={props.redditLink} target="_blank">Reddit</a>
                :
                null
            }

            {props.wikipediaLink !== undefined
                ?
                <a href={props.wikipediaLink} target="_blank">Wikipedia</a>
                :
                null
            }

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
