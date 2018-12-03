import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/launches';
import Loading from '../common/loading';
import LanuchesData from './launchesData';
import LanuchesGallery from './launchesGallery';
import LanuchesSocial from './launchesSocial';

class Launches extends React.Component{

    getIdlaunch() {
        const id = this.props.match.params.launcheId;
        return id;
    }
    componentDidMount() {
        let idlaunches = this.getIdlaunch();
        this.props.getLanuches(idlaunches);
    }

    render(){
        console.log(this.props.launchesStore.data);
        if (this.props.launchesStore.data !== null) {
            // console.log(this.props.launchesStore.data.links.flickr_images);
        }
        return (
            <Loading isLoading={this.props.launchesStore.isLoading}>
                <div className="container">
                    {this.props.launchesStore.data !== null
                        ?

                        <div className="launches_details">
                            <LanuchesData
                                numberId={this.getIdlaunch()}
                                missionName={this.props.launchesStore.data.mission_name}
                                launchDateUtc={this.props.launchesStore.data.launch_date_local}
                                details={this.props.launchesStore.data.details}
                                siteNameLong={this.props.launchesStore.data.launch_site.site_name_long}
                                rocketName={this.props.launchesStore.data.rocket.rocket_name}
                                missionPatch={this.props.launchesStore.data.links.mission_patch_small}
                            />
                            <LanuchesGallery
                                lanuchesGallery={this.props.launchesStore.data.links.flickr_images}
                            />
                            <LanuchesSocial
                                youtubeLink={this.props.launchesStore.data.links.video_link}
                                redditLink={this.props.launchesStore.data.links.reddit_launch}
                                wikipediaLink={this.props.launchesStore.data.links.wikipedia}
                                articleLink={this.props.launchesStore.data.links.article_link}

                            />
                        </div>
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
