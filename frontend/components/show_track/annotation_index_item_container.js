import {connect} from 'react-redux';
import { createUpvote, deleteUpvote} from "../../actions/track_actions";
import AnnotationIndexItem from './annotation_index_item';

const mapStateToProps = ({session}) => {
    return(
        {session}
        )
};

const mapDispatchToProps = dispatch => ({
    createUpvote: (upvote) => dispatch(createUpvote(upvote)),
    deleteUpvote: (upvoteId, annotationId, trackId) => dispatch(deleteUpvote(upvoteId, annotationId, trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationIndexItem);