import { takeLatest, put, call } from 'redux-saga/effects'
import { setFavorite } from '../../../mockServer/mockServer'
import {FAVORITE_POST_SUCCESS,FAVORITE_POST_FAILURE,FAVORITE_POST} from '../type'
function* favoritePost(action) {
  try {
    const newPost = yield call(setFavorite, action.payload.id,action.payload.data);
    yield put({ type: FAVORITE_POST_SUCCESS, payload: {data :newPost} })
  } catch (error) {
    yield put({ type: FAVORITE_POST_FAILURE })
  }
}

export default function* watchFavoritePost() {
  yield takeLatest(FAVORITE_POST, favoritePost);
}
