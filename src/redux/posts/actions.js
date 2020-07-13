import {ENABLE_CREATE_POST,STORE_IMG,DELETE_POST,CREATE_POST,FAVORITE_POST,COMMENT_POST,FETCH_POSTS} from './type'

export function deletePost(id){
    return {
        type:DELETE_POST,
        payload:{id}
    }
}
export function enableCreatePostBox(bool){
    return {
        type:ENABLE_CREATE_POST,
        payload:bool
    }
}
export function createPost(data,img){
    return {
        type:CREATE_POST,
        payload:{data,img}
    }
}
export function setLikedPost(id,data){
    return {
        type:FAVORITE_POST,
        payload:{id,data}
    }
}
export function setCommentPost(id,data){
    return {
        type:COMMENT_POST,
        payload:{id,data}
    }
}
export function getPosts(){
    return {
        type:FETCH_POSTS
    }
}
export function setImgBase64(data){
    return {
        type:STORE_IMG,
        payload:{data}
    }
}
