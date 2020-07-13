import {samplePosts} from '../../mockServer/defaultPosts'
import {ENABLE_CREATE_POST,STORE_IMG,DELETE_POST_SUCCESS,FAVORITE_POST_SUCCESS,COMMENT_POST_FAILURE,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE,CREATE_POST_SUCCESS,CREATE_POST_FAILURE,COMMENT_POST_SUCCESS} from './type'
const initialState = {
    data: {
        items: samplePosts,
        img: null,
    },
    enableCreatePostBox: false,
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case ENABLE_CREATE_POST:
            return {
                ...state,
                img:null,
                enableCreatePostBox: action.payload
            }
        case FETCH_POSTS_SUCCESS:
            return {
                items: action.payload.data.reverse(),
            }
        case FETCH_POSTS_FAILURE:
            return {
                items: [],
            }
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                img: null,
                items: action.payload.data.reverse(),
            }
        case CREATE_POST_FAILURE:
            return {
                ...state,
                items: [],
            }
        case COMMENT_POST_SUCCESS:
            return {
                ...state,
                items: action.payload.data.reverse(),
            }
        case COMMENT_POST_FAILURE:
            return {
                ...state,
            }
        case FAVORITE_POST_SUCCESS:
            return {
                ...state,
                items: action.payload.data.reverse(),
            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                items: action.payload.data.reverse(),
            }
        case STORE_IMG:
            return {
                ...state,
                img: action.payload.data,
                loading: false
            }

        default:
            return state
    }
};
