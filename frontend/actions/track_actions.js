import * as TrackAPIUtil from '../util/track_api_util';
import * as AnnotationAPIUtil from '../util/annotation_api_util';
import * as UpvoteAPIUtil from '../util/upvote_api_util';
import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";
export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const REMOVE_UPVOTE = "REMOVE_UPVOTE";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const receiveTrack = ({track, annotations}) => ({
    type: RECEIVE_TRACK,
    track,
    annotations
});

export const receiveAnnotation = ({annotation}) => ({
    type: RECEIVE_ANNOTATION,
    annotation
});

export const removeAnnotation = (annotationId, trackId) => ({
    type: REMOVE_ANNOTATION,
    annotationId,
    trackId
})

export const receiveUpvote = ({upvote}) => ({
    type: RECEIVE_UPVOTE,
    upvote
});

export const removeUpvote = (upvoteId, annotationId, trackId) => ({
    type: REMOVE_UPVOTE,
    upvoteId,
    annotationId,
    trackId
});

export const receiveComment = ({comment}) => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = (commentId, annotationId, trackId) => ({
    type: REMOVE_COMMENT,
    commentId,
    annotationId,
    trackId
});

export const createAnnotation = annotation => dispatch => (
    AnnotationAPIUtil.createAnnotation(annotation).then(annotation => (
        dispatch(receiveAnnotation(annotation))
    ))
);

export const updateAnnotation = annotation => dispatch => (
    AnnotationAPIUtil.updateAnnotation(annotation).then(updatedAnnotation => (
        dispatch(receiveAnnotation(updatedAnnotation))
    ))
);

export const deleteAnnotation = (annotationId, trackId) => dispatch => (
    AnnotationAPIUtil.deleteAnnotation(annotationId).then(() => (
        dispatch(removeAnnotation(annotationId, trackId))
    ))
);

export const createUpvote = upvote => dispatch => (
    UpvoteAPIUtil.createUpvote(upvote).then(upvote => (
        dispatch(receiveUpvote(upvote))
    ))
);

export const deleteUpvote = (upvoteId, annotationId, trackId) => dispatch => (
    UpvoteAPIUtil.deleteUpvote(upvoteId).then(() => (
        dispatch(removeUpvote(upvoteId, annotationId, trackId))
    ))
);

export const updateUpvote = (upvote, upvoteId) => dispatch => (
    UpvoteAPIUtil.updateUpvote(upvote, upvoteId).then(upvote => (
        dispatch(receiveUpvote(upvote))
    ))
);

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment).then(comment => (
        dispatch(receiveComment(comment))
        ))
);

export const deleteComment = (commentId, annotationId, trackId) => dispatch => (
    CommentAPIUtil.deleteComment(commentId).then(() => (
        dispatch(removeComment(commentId, annotationId, trackId))
    ))
);

export const updateComment = (comment, commentId) => dispatch => (
    CommentAPIUtil.updateComment(comment, commentId).then(comment => (
        dispatch(receiveComment(comment))
    ))
);

export const fetchTracks = () => dispatch => (
    TrackAPIUtil.fetchTracks().then(tracks => 
        {console.log(tracks);
        dispatch(receiveTracks(tracks));
        })
);

export const fetchTrack = id => dispatch => (
    TrackAPIUtil.fetchTrack(id).then(track => {
        return dispatch(receiveTrack(track));}
    ));