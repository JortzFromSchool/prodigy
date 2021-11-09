import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';

import TopTenTracks from './top_ten_tracks';

const mapStateToProps = (state) => {
    return {
        tracks: state.entities.tracks
    };
};

const mapDispatchToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTenTracks);