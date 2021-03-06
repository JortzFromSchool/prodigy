import { connect } from 'react-redux';
import { fetchTrack} from '../../actions/track_actions';
import { openModal, closeModal, openLogInModal} from '../../actions/modal_actions';
import TrackShow from './track_show';

const mapStateToProps = (state, {match}) => {
    const trackId = parseInt(match.params.trackId);
    return {
        trackId,
        tracks: state.entities.tracks,
        session: state.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    annotateForm: (annotateString, trackId) => (dispatch(openModal('annotate', annotateString, trackId))),
    loginPrompt: () => (dispatch(openLogInModal()))
}};

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);