import { combineReducers } from 'redux';
import { SelectFiltertReducer } from './reducers/filter-reducer'
import { SelectSortReducer } from './reducers/sort-reducer'
import { intialUserState, UserReducer } from './reducers/user-reducer';

export const intialState = {
  selectFilter: null,
  selectSort: null,
  user: intialUserState,
};

export const rootReducer = combineReducers({
  selectFilter: SelectFiltertReducer,
  selectSort: SelectSortReducer,
  user: UserReducer,
});