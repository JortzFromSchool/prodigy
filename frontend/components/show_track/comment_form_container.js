import {connect} from 'react-redux';
import { fetchTrack, createComment } from '../../actions/track_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({session}) => {
    return(
        { session }
    )
};

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment)), 
    fetchTrack: trackId => dispatch(fetchTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);