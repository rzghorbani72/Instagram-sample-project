import { takeLatest, put, call } from 'redux-saga/effects'
import { setComment } from '../../../mockServer/mockServer'
import {COMMENT_POST_SUCCESS,COMMENT_POST_FAILURE,COMMENT_POST} from '../type'
function* CommentPost(action) {
  try {
    const newPost = yield call(setComment, action.payload.id,action.payload.data);
    yield put({ type: COMMENT_POST_SUCCESS, payload: {data :newPost} })
  } catch (error) {
    yield put({ type: COMMENT_POST_FAILURE })
  }
}

export default function* watchCommentPost() {
  yield takeLatest(COMMENT_POST, CommentPost);
}
