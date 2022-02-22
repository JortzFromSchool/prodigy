import React from 'react';
import {withRouter} from 'react-router-dom';
import ShowContainer from './show_container';
import ShowAnnotations from './show_annotations';


class TrackShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleHighlight = this.handleHighlight.bind(this);
    }

    componentDidMount () {
        this.props.fetchTrack(this.props.trackId);
    }

    handleHighlight () {
        const highlightedText = window.getSelection().toString();
        if(highlightedText){
            this.props.annotateForm(highlightedText, this.props.trackId);
        };
    }

    handleAnnotations (annotations) {
        if (annotations) {
            return <ShowAnnotations annotations={annotations} trackId={this.props.trackId}/>
        };
    }

    render() {
        
        if(this.props.tracks[this.props.trackId]) {
            const {title, artist, album_url, producer, views, lyrics, description, release_date, album_name, track_number, producer_id, genre} = this.props.tracks[this.props.trackId];
            const {annotations} = this.props.tracks[this.props.trackId];
            return(
                <div className="show-component">
                    <div className="show-header">
                        
                        <img src={album_url} className="show-album-artwork" />
                        <div className="show-header-info">
                            <span className="show-title">{title}</span>
                            <span className="show-artist">{artist.username}</span>
                            <span className="show-producer">Produced by {producer.username}</span>
                            <span className="show-album">Album {album_name}</span>
                        </div>
                        <div className="show-stats">
                            <span className="show-views">{views}</span>
                        </div>
                        <img src={album_url} className="show-background-image"/>
                    </div>
                    <div className="show-body">
                        <div className="show-body-content-container">
                            <div className="show-left-column">
                                <span className="show-lyrics" onMouseUp={this.handleHighlight}>{lyrics}</span>
                            </div>
                            <div className="show-right-column">
                                <div className="show-description">{description}</div>
                                {this.handleAnnotations(annotations)}
                            </div>
                        </div>
                    </div>
                </div>
            )
            } else {
                return (
                    <div></div>
                )
            }
    }
}

export default TrackShow;