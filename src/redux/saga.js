import {all} from 'redux-saga/effects';
import {watchFetchPosts} from "./posts/sagas/fetch";
import watchCreatePost from "./posts/sagas/create";
import watchCommentPost from "./posts/sagas/comment";
import watchFavoritePost from "./posts/sagas/favorite";
import watchDeletePost from "./posts/sagas/delete";

export default function* AppSaga() {
    yield all([
        watchCreatePost(),
        watchFetchPosts(),
        watchCommentPost(),
        watchFavoritePost(),
        watchDeletePost()
    ]);
}
