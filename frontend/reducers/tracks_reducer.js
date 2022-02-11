import { RECEIVE_TRACK, RECEIVE_TRACKS, RECEIVE_ANNOTATION, RECEIVE_UPVOTE, REMOVE_UPVOTE } from "../actions/track_actions";

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_TRACKS:
            return Object.assign({}, state, action.tracks);
        case RECEIVE_TRACK:
            const newTrack = { [action.track.id]: action.track};
            return Object.assign({}, state, newTrack);
        case RECEIVE_ANNOTATION:
            const {annotation} = action;
            //const newState = Object.assign({}, state);
            newState[annotation.track.id].annotations[annotation.id] = annotation;
            return newState;
        case RECEIVE_UPVOTE:
            const {upvote} = action;
            //const newState = Object.assign({}, state);
            newState[upvote.annotation.track.id].annotations[upvote.annotation.id].upvotes[upvote.id] = upvote;
            return newState;
        case REMOVE_UPVOTE:
            const {upvoteId, annotationId, trackId} = action;
            //const newState = Object.assign({}, state);
            delete newState[trackId].annotations[annotationId].upvotes[upvoteId];
            return newState;
        default:
            return state;
    }
};

export default tracksReducer;