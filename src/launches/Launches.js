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
    showFull(el){
        let img_src = el.target.src,
            popup = document.getElementsByClassName("popup")[0],
            img_container = document.getElementsByClassName("img_container")[0],
            element = img_container.getElementsByTagName("IMG")[0],
            img_width = el.target.clientWidth,
            img_height = el.target.clientHeight,
            close = document.getElementsByClassName("close")[0];
        if (img_height < img_width) {
            popup.classList.add("width");
        }

        element.src = img_src;
        popup.classList.add("show");

        close.addEventListener("click", function(event){
            popup.classList.remove("show");
            element.src = "";
            if (popup.classList.contains("width")) {
                popup.classList.remove("width");
            }
        });
    }


    render(){
        // console.log(this.props.launchesStore.data);
        // if (this.props.launchesStore.data !== null) {
        //     // console.log(this.props.launchesStore.data.links.flickr_images);
        // }
        return (
            <Loading isLoading={this.props.launchesStore.isLoading}>
                <div className="">
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
                                showFull={this.showFull.bind(this)}
                            />
                            <LanuchesSocial
                                youtubeLink={this.props.launchesStore.data.links.video_link}
                                redditLink={this.props.launchesStore.data.links.reddit_launch}
                                wikipediaLink={this.props.launchesStore.data.links.wikipedia}
                                articleLink={this.props.launchesStore.data.links.article_link}
                                telemetry={this.props.launchesStore.data.telemetry.flight_club}

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
