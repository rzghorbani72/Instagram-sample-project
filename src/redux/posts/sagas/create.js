import {takeLatest, put, call} from 'redux-saga/effects'
import {setPost} from '../../../mockServer/mockServer'
import {CREATE_POST_PENDING, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, CREATE_POST} from '../type'

function* createPost(action) {
    yield put({type: CREATE_POST_PENDING})
    try {
        const newPost = yield call(setPost, action.payload.data, action.payload.img);
        yield put({type: CREATE_POST_SUCCESS, payload: {data: newPost}})
    } catch (error) {
        yield put({type: CREATE_POST_FAILURE})
    }
}

export default function* watchCreatePost() {
    yield takeLatest(CREATE_POST, createPost);
}
