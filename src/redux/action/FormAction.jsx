import axiosInstance from '../AxiosInstance.jsx';
import axios from 'axios'
import {
    createPost,
    formatPosts,
    getPosts,
    deletePost,
    updatePost,
} from '../FormServices';
import {
    CONFIRMED_CREATE_POST_ACTION,
    CONFIRMED_DELETE_POST_ACTION,
    CONFIRMED_EDIT_POST_ACTION,
    CONFIRMED_GET_POSTS,
} from './FormTypes';

export function deleteFormAction(postId, history) {
    return (dispatch, getState) => {
        deletePost(postId).then((response) => {
            dispatch(confirmedDeletePostAction(postId));
            history.push('/posts');
        });
    };
}

export function confirmedDeleteFormAction(postId) {
    return {
        type: CONFIRMED_DELETE_POST_ACTION,
        payload: postId,
    };
}

export function createFormAction(postData, history) {
    return (dispatch, getState) => {
        axios.post('https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article',postData)
        .then((res) => {
            console.log(res);
            dispatch(confirmedCreateFormAction(res));

        })
        // createPost(postData).then((response) => {
        //     const singlePost = {
        //         ...postData,
        //         id: response.data.name,
        //     };
        //     dispatch(confirmedCreateFormAction(singlePost));
        //     history.push('/posts');
        // });
    };
}

export function getFormAction() {
    return (dispatch, getState) => {
        getPosts().then((response) => {
            let posts = formatPosts(response.data);
            dispatch(confirmedGetPostsAction(posts));
        });
    };
}

export function confirmedCreateFormAction(singlePost) {
    return {
        type: CONFIRMED_CREATE_POST_ACTION,
        payload: singlePost,
    };
}

export function confirmedGetFormAction(posts) {
    return {
        type: CONFIRMED_GET_POSTS,
        payload: posts,
    };
}

export function confirmedUpdateFormAction(post) {
    return {
        type: CONFIRMED_EDIT_POST_ACTION,
        payload: post,
    };
}

export function updateFormAction(post, history) {
    return (dispatch, getState) => {
        updatePost(post, post.id).then((reponse) => {
            dispatch(confirmedUpdateFormAction(post));
            history.push('/posts');
        });
    };
}