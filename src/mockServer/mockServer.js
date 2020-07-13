import {postSchemaCreator,samplePosts} from './defaultPosts';
import _ from 'lodash'
export const getPosts = async () => {
    let local_storage_posts = await localStorage.getItem('posts')
    _.isEmpty(local_storage_posts) ? await localStorage.setItem('posts',JSON.stringify(samplePosts)) : JSON.parse(local_storage_posts)
    return JSON.parse(localStorage.getItem('posts'))
};
export const setPost = async (data, img) => {
    let local_storage_posts = await localStorage.getItem('posts')
    const posts = await _.isEmpty(local_storage_posts) ? [] : JSON.parse(local_storage_posts)
    const data_json = await postSchemaCreator(data, img);
    const new_posts = JSON.stringify(_.concat(posts, data_json));
    await localStorage.setItem('posts', String(new_posts))
    return JSON.parse(new_posts)
};
export const deletePost = async (id) => {
    let local_storage_posts = await localStorage.getItem('posts')
    const posts = await _.isEmpty(local_storage_posts) ? [] : JSON.parse(local_storage_posts)
    await _.remove(posts, {id})
    const new_posts = JSON.stringify(posts);
    debugger;
    await localStorage.setItem('posts', String(new_posts))
    return JSON.parse(new_posts)
};
export const setFavorite = async (id,hearts) => {
    let posts = await JSON.parse(localStorage.getItem('posts'));
    let like_post = await _.find(posts,{id});
    let likes = like_post.likes +hearts
    posts[_.findIndex(posts,{id})].likes =await likes;
    await localStorage.setItem('posts',JSON.stringify(posts))
    const new_posts = posts;
    return new_posts
};
export const setComment = async (id, msg) => {
    let posts = await JSON.parse(localStorage.getItem('posts'));
    let commented_post = await _.isEmpty(_.find(posts,{id:id}).comments) ? [] : _.find(posts,{id:id}).comments;
    await commented_post.push({user:'rahnama',msg})
    posts[_.findIndex(posts,{id:id})].comments =  commented_post.reverse();
    localStorage.setItem('posts',JSON.stringify(posts))
    return posts
}