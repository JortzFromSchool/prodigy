import React from 'react';
import {withRouter} from 'react-router-dom';
import ShowContainer from './show_container';


class TrackShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchTrack(this.props.trackId);
        // const annotator = require("annotator");
        // const app = new annotator.App();
        // app.include(annotator.ui.main);
        // app.include(annotator.storage.debug);
        // app.start();
    }

    render() {
        const {title, artist, album_url, producer, views, lyrics, description, release_date, album_id, track_number, producer_id, genre} = this.props.tracks[this.props.trackId];
        console.log(producer);
        return(
            <div className="show-component">
                <div className="show-header">
                    
                    <img src={album_url} className="show-album-artwork" />
                    <div className="show-header-info">
                        <span className="show-title">{title}</span>
                        <span className="show-artist">{artist.username}</span>
                        <span className="show-producer">Produced by {producer.username}</span>
                        <span className="show-album">Album {album_id}</span>
                    </div>
                    <div className="show-stats">
                        <span className="show-views">{views}</span>
                    </div>
                    <img src={album_url} className="show-background-image"/>
                </div>
                <div className="show-body">
                    <div className="show-body-content-container">
                        <div className="show-left-column">
                            <span className="show-lyrics">{lyrics}</span>
                        </div>
                        <div className="show-right-column">
                            <span className="show-description">{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackShow;