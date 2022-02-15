import * as TrackAPIUtil from '../util/track_api_util';
import * as AnnotationAPIUtil from '../util/annotation_api_util';
import * as UpvoteAPIUtil from '../util/upvote_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const REMOVE_UPVOTE = "REMOVE_UPVOTE";

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

export const createAnnotation = annotation => dispatch => (
    AnnotationAPIUtil.createAnnotation(annotation).then(annotation => (
        dispatch(receiveAnnotation(annotation))
    ))
);

export const createUpvote = upvote => dispatch => (
    UpvoteAPIUtil.createUpvote(upvote).then(upvote => (
        dispatch(receiveUpvote(upvote))
    ))
);

export const deleteUpvote = (upvoteId, annotationId, trackId) => dispatch => (
    UpvoteAPIUtil.deleteUpvote(upvoteId).then(upvoteId => (
        dispatch(removeUpvote(upvoteId, annotationId, trackId))
    ))
);

export const updateUpvote = (upvote, upvoteId) => dispatch => (
    UpvoteAPIUtil.updateUpvote(upvote, upvoteId).then(upvote => (
        dispatch(receiveUpvote(upvote))
    ))
);

export const fetchTracks = () => dispatch => (
    TrackAPIUtil.fetchTracks().then(tracks => (
        dispatch(receiveTracks(tracks))
    ))
);

export const fetchTrack = id => dispatch => {
    console.log(`inside fetch track id = ${id}`);
    return TrackAPIUtil.fetchTrack(id).then(track => {
        return dispatch(receiveTrack(track));}
    )};