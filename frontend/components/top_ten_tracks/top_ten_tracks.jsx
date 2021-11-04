import React from 'react';
import TopTenIndexItem from './top_ten_index_item';

class TopTenTracks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    asArray(tracks) {
        return Object.keys(tracks).map(track => tracks[track])
    };

    render() {
        return (
            <div>
                <h1>Top Tracks</h1>
                {this.asArray(this.props.tracks).map(track => (
                    <TopTenIndexItem 
                        track={track}
                        key={track.id}
                    />
                ))}
            </div>
        )
    }
};

export default TopTenTracks;