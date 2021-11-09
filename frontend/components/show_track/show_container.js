import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';

import TrackShow from './track_show';

const mapStateToProps = (state, {match}) => {
    const trackId = parseInt(match.params.trackId);
    return {
        trackId,
        tracks: state.entities.tracks
    };
};

const mapDispatchToProps = dispatch => ({
    fetchTrack: (id) => dispatch(fetchTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);