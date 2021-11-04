import React from 'react';

class TopTenIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {title, artist_id, views} = this.props.track;
        return (
            <div className="top-ten-track-index-item">
                <div className="index-item-info">
                    <span className="index-title">{title}</span>
                    <span className="index-artist-id">{artist_id}</span>
                    <span className="index-views">{toString(views)}</span>
                </div>
            </div>
        )
    }
}

export default TopTenIndexItem;