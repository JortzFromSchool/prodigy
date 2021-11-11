import * as TrackAPIUtil from '../util/track_api_util';
import * as AnnotationAPIUtil from '../util/annotation_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";

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

export const createAnnotation = annotation => dispatch => (
    AnnotationAPIUtil.createAnnotation(annotation).then(annotation => (
        dispatch(receiveAnnotation(annotation))
    ))
);

export const fetchTracks = () => dispatch => (
    TrackAPIUtil.fetchTracks().then(tracks => (
        dispatch(receiveTracks(tracks))
    ))
);

export const fetchTrack = id => dispatch => (
    TrackAPIUtil.fetchTrack(id).then(track => {
        return dispatch(receiveTrack(track));}
    ));