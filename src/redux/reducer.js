import { combineReducers } from 'redux';
import posts from './posts/reducer';

export default function createReducer() {
  return combineReducers({
    posts
  });
}
