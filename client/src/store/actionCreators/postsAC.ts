import { Dispatch } from 'redux';
import { postActions, PostsActionTypes } from '../../types/postsTypes';
import PostService from '../../service/PostService';

export const getPosts = (searchValue?: string, page?: number, userId?: string) => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const { data } = await PostService.getPosts(searchValue, page, userId);
      dispatch({
        type: PostsActionTypes.GET_PAGE_POSTS,
        payload: { posts: data.items, total: data.total },
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

export const updatePost = (
  title: string,
  text: string,
  description: string,
  photoUrl: string,
  id: string
) => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await PostService.updatePost(title, text, description, photoUrl, id);
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
