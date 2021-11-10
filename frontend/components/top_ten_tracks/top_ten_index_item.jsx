import React from 'react';
import {Link} from 'react-router-dom';

class TopTenIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {title, artist, views, id, album_url} = this.props.track;
        console.log(album_url);
        const index = this.props.index;
        return (
            <div className="top-ten-track-index-item">
                <div className="index-item-info">
                    <Link to={`/tracks/${id}`} className="track-link">
                        <span className="index-item index-number">{index+1}</span>
                        <img className="index-item index-artwork" src={album_url}/>
                        <span className="index-item index-title">{title}</span>
                        <span className="index-item index-artist">{artist.username}</span>
                        <span className="index-item index-views">{views}</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default TopTenIndexItem;