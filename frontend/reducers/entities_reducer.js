import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import tracksReducer from './tracks_reducer';

export const entitiesReducer = combineReducers({
  users: usersReducer,
  tracks: tracksReducer
});

export default entitiesReducer;