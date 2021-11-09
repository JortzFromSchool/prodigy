import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const receiveTrack = (track) => ({
    type: RECEIVE_TRACK,
    track
});

export const fetchTracks = () => dispatch => (
    TrackAPIUtil.fetchTracks().then(tracks => (
        dispatch(receiveTracks(tracks))
    ))
);

export const fetchTrack = id => dispatch => (
    TrackAPIUtil.fetchTrack(id).then(track => {
        return dispatch(receiveTrack(track));}
    ));