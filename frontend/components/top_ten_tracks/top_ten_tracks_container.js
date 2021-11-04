import { connect } from 'react-redux';
import { fetchTracks } from '../../util/track_api_util';

import TopTenTracks from './top_ten_tracks';

const mapStateToProps = (state) => {
    return {
        tracks: state.entities.tracks
    };
};

const mapDispatchToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks)
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTenTracks);