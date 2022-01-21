import { Dispatch } from 'redux';
import { postActions, PostsActionTypes } from '../../types/postsTypes';
import PostService from '../../service/PostService';

export const getAllPosts = (search = '') => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const { data } = await PostService.getAllPost(search);
      console.log(data);
      dispatch({
        type: PostsActionTypes.GET_ALL_POSTS,
        payload: data.items,
      });
    } catch (e: any) {
      console.log(e.response.data.error);
    }
  };
};

export const getPost = (id: string) => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POST });
      const { data } = await PostService.getPost(id);
      console.log(data);
      dispatch({
        type: PostsActionTypes.GET_POST,
        payload: data,
      });
    } catch (e: any) {
      console.log(e.response.data.error);
    }
  };
};

export const createPost = (title: string, text: string, photoUrl?: string) => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POST });
      const response = await PostService.createPost(title, text, photoUrl);
      console.log(response);
      dispatch({
        type: PostsActionTypes.CREATE_POST,
        payload: response.data,
      });
    } catch (e: any) {
      console.log(e.response.data.error);
    }
  };
};

export const deletePost = (id: string) => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await PostService.deletePost(id);
      console.log(response);
      dispatch({
        type: PostsActionTypes.DELETE_POST,
        payload: id,
      });
    } catch (e: any) {
      console.log(e.response.data.error);
    }
  };
};

export const updatePost = (title: string, text: string, photoUrl: string, id: string) => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await PostService.updatePost(title, text, photoUrl, id);
      console.log(response.data);
      dispatch({
        type: PostsActionTypes.UPDATE_POST,
        payload: response.data,
      });
    } catch (e: any) {
      console.log(e.response.data.error);
    }
  };
};
