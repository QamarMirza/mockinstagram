import { combineReducers } from 'redux';
import { SelectFiltertReducer } from './reducers/filter-reducer'
import { SelectSortReducer } from './reducers/sort-reducer'
import { intialUserState, UserReducer } from './reducers/user-reducer';
import { intialMediaState, mediaReducer } from './reducers/media-reducer';
import { routerReducer } from 'react-router-redux';

export const intialState = {
  selectFilter: null,
  selectSort: null,
  user: intialUserState,
  media: intialMediaState,
};

export const rootReducer = combineReducers({
  selectFilter: SelectFiltertReducer,
  selectSort: SelectSortReducer,
  user: UserReducer,
  media: mediaReducer,
  routing: routerReducer,

});

