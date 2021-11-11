import { RECEIVE_TRACK, RECEIVE_TRACKS, RECEIVE_ANNOTATION } from "../actions/track_actions";

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type) {
        case RECEIVE_TRACKS:
            return Object.assign({}, state, action.tracks);
        case RECEIVE_TRACK:
            const newTrack = { [action.track.id]: action.track};
            return Object.assign({}, state, newTrack);
        case RECEIVE_ANNOTATION:
            const {annotation} = action;
            const newState = Object.assign({}, state);
            //this might be wrong, inspect state in console
            newState[annotation.track_id].annotationIds.push(annotation.id);
            newState[annotation.track_id].annotations[annotation.id] = annotation;
            return newState;
        default:
            return state;
    }
};

export default tracksReducer;