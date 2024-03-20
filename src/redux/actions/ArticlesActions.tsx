import {
  ArticleActionTypes,
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
} from '../types';

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store';

const BASE_URL = process.env.REACT_APP_API_URL;
console.log(BASE_URL);

export const fetchArticles = (): ThunkAction<void, AppState, null, ArticleActionTypes> => {
  return (dispatch: ThunkDispatch<AppState, null, ArticleActionTypes>) => {
    dispatch({ type: FETCH_ARTICLES_BEGIN });
    fetch(`${BASE_URL}/articles`)
      .then(res => res.json())
      .then(data =>
        dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: data })
      )
      .catch(error =>
        dispatch({ type: FETCH_ARTICLES_FAILURE, payload: error })
      );
  };
};

export const fetchArticleById = (id: string): ThunkAction<void, AppState, null, ArticleActionTypes> => {
  return async (dispatch: ThunkDispatch<AppState, null, ArticleActionTypes>) => {
    dispatch({ type: FETCH_ARTICLES_BEGIN });
    fetch(`${BASE_URL}/articles/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(article =>
        dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: [article] })
      )
      .catch(error =>
        dispatch({ type: FETCH_ARTICLES_FAILURE, payload: error })
      );
  };
};


export const addArticle = (articleData: any) => (dispatch: any) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(articleData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Problem z dodaniem artykułu');
    }
    return response.json();
  })
  .then(article => {
    dispatch({ type: ADD_ARTICLE_SUCCESS, payload: article });
    dispatch(fetchArticles()); // Odświeża listę artykułów po pomyślnym dodaniu
  })
  .catch(error => {
    dispatch({ type: ADD_ARTICLE_FAILURE, payload: error.toString() });
  });
};

export const deleteArticle = (id: string): ThunkAction<Promise<void>, AppState, null, ArticleActionTypes> => {
  return (dispatch: ThunkDispatch<AppState, null, ArticleActionTypes>) => {
    return fetch(`${BASE_URL}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to delete the article');
      }
      dispatch({ type: FETCH_ARTICLES_BEGIN });
      return fetch(`${BASE_URL}/articles`);
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch articles after deletion');
      }
      return res.json();
    })
    .then(data => {
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: FETCH_ARTICLES_FAILURE, payload: error });
    })
    .then(() => {
      return undefined;
    });
  };
};