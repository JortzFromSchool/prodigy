import { RECEIVE_TRACK, RECEIVE_TRACKS, RECEIVE_ANNOTATION, RECEIVE_UPVOTE, REMOVE_UPVOTE, RECEIVE_COMMENT, REMOVE_COMMENT, REMOVE_ANNOTATION } from "../actions/track_actions";

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    const {comment, upvote, annotation, upvoteId, commentId, annotationId, trackId} = action;
    switch(action.type) {
        case RECEIVE_TRACKS:
            return Object.assign({}, state, action.tracks);
        case RECEIVE_TRACK:
            const newTrack = { [action.track.id]: action.track};
            return Object.assign({}, state, newTrack);
        case RECEIVE_ANNOTATION:
            newState[annotation.track.id].annotations[annotation.id] = annotation;
            return newState;
        case REMOVE_ANNOTATION:
            delete newState[trackId].annotations[annotationId];
            return newState;
        case RECEIVE_UPVOTE:
            newState[upvote.annotation.track_id].annotations[upvote.annotation.id].upvotes[upvote.id] = upvote;
            return newState;
        case REMOVE_UPVOTE:
            delete newState[trackId].annotations[annotationId].upvotes[upvoteId];
            return newState;
        case RECEIVE_COMMENT:
            newState[comment.annotation.track_id].annotations[comment.annotation.id].comments[comment.id] = comment;
            return newState;
        case REMOVE_COMMENT:
            delete newState[trackId].annotations[annotationId].comments[commentId];
            return newState;
        default:
            return state;
    }
};

export default tracksReducer;