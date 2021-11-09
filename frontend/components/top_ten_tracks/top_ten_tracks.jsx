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
            <div className="top-ten-container">
                <h1>CHARTS</h1>
                <ul>
                    {this.asArray(this.props.tracks).map((track, index) => {
                        return(
                            <li key={`index-${index}`}>
                                <TopTenIndexItem
                                    index={index}
                                    track={track}
                                />
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
};

export default TopTenTracks;