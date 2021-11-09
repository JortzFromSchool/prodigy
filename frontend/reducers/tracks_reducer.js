import { RECEIVE_TRACK, RECEIVE_TRACKS } from "../actions/track_actions";

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type) {
        case RECEIVE_TRACKS:
            return Object.assign({}, state, action.tracks);
        case RECEIVE_TRACK:
            const newTrack = { [action.track.id]: action.track};
            return Object.assign({}, state, newTrack);
        default:
            return state;
    }
};

export default tracksReducer;