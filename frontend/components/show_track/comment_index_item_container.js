import {connect} from 'react-redux';
import {deleteComment, fetchTrack} from "../../actions/track_actions";
import CommentIndexItem from './comment_index_item';

const mapStateToProps = ({session}) => {
    return(
        {session}
    )
};

const mapDispatchToProps = dispatch => ({
    deleteComment: (commentId, annotationId, trackId) => dispatch(deleteComment(commentId, annotationId, trackId)),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);