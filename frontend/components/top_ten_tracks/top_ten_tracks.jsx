import React from 'react';
import TopTenIndexItem from './top_ten_index_item';

class TopTenTracks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    asArrayByViews(tracks) {
        return Object.values(tracks)
        .sort((a, b) => (a.views < b.views) ? 1 : -1)
    };

    render() {
        return (
            <div className="top-ten-container">
                <h1>CHARTS</h1>
                <ul>
                    {this.asArrayByViews(this.props.tracks).map((track, index) => {
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