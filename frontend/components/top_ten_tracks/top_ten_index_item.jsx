import React from 'react';

class TopTenIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {title, artist, views} = this.props.track;
        const index = this.props.index;
        return (
            <div className="top-ten-track-index-item">
                <div className="index-item-info">
                    <span className="index-item index-number">{index+1}</span>
                    <span className="index-item index-title">{title}</span>
                    <span className="index-item index-artist-id">{artist.username}</span>
                    <span className="index-item index-views">{views}</span>
                </div>
            </div>
        )
    }
}

export default TopTenIndexItem;