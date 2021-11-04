import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import tracksReducer from './tracks_reducer';

export default combineReducers({
  users: usersReducer,
  tracks: tracksReducer
});