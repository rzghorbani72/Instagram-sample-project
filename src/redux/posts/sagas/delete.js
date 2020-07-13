import { takeLatest, put, call } from 'redux-saga/effects'
import { deletePost } from '../../../mockServer/mockServer'
import {DELETE_POST_SUCCESS,DELETE_POST_FAILURE,DELETE_POST} from '../type'
function* removePost(action) {
    try {
        const newPost = yield call(deletePost, action.payload.id);
        yield put({ type: DELETE_POST_SUCCESS, payload: {data :newPost} })
    } catch (error) {
        yield put({ type: DELETE_POST_FAILURE })
    }
}

export default function* watchDeletePost() {
    yield takeLatest(DELETE_POST, removePost);
}
