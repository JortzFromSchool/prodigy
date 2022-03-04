import {connect} from 'react-redux';
import { createUpvote, deleteUpvote, fetchTrack, deleteAnnotation} from "../../actions/track_actions";
import { openEditModal } from '../../actions/modal_actions';
import AnnotationIndexItem from './annotation_index_item';

const mapStateToProps = ({session}) => {
    return(
        {session}
        )
};

const mapDispatchToProps = dispatch => ({
    createUpvote: (upvote) => dispatch(createUpvote(upvote)),
    deleteUpvote: (upvoteId, annotationId, trackId) => dispatch(deleteUpvote(upvoteId, annotationId, trackId)),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    openEdit: (annotation) => dispatch(openEditModal('annotation-update', annotation)),
    deleteAnnotation: (annotationId, trackId) => dispatch(deleteAnnotation(annotationId, trackId)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationIndexItem);