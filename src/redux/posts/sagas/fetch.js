import {takeLatest, put, call} from 'redux-saga/effects'
import {getPosts} from '../../../mockServer/mockServer'
import {FETCH_POSTS_PENDING,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE,FETCH_POSTS} from '../type'
function* fetchPosts() {
    yield put({type: FETCH_POSTS_PENDING})
    try {
        const posts = yield call(getPosts);
        yield put({type: FETCH_POSTS_SUCCESS, payload: {data:posts}})
    } catch (error) {
        yield put({type: FETCH_POSTS_FAILURE});
    }
}

export function* watchFetchPosts() {
    yield takeLatest(FETCH_POSTS, fetchPosts)
}
