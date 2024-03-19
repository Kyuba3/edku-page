import {
  Article,
  ArticleActionTypes,
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
} from '../types';

import { Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store';

export const fetchArticles = (): ThunkAction<void, AppState, null, ArticleActionTypes> => {
  return (dispatch: ThunkDispatch<AppState, null, ArticleActionTypes>) => {
    dispatch({ type: FETCH_ARTICLES_BEGIN });
    fetch('http://localhost:4000/api/articles')
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
    fetch(`http://localhost:4000/api/articles/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(article =>
        dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: [article] }) // Payload jest tablicą, aby zachować spójność z istniejącą strukturą danych
      )
      .catch(error =>
        dispatch({ type: FETCH_ARTICLES_FAILURE, payload: error })
      );
  };
};


export const addArticle = (articleData: any) => (dispatch: any) => {
  return fetch('http://localhost:4000/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...articleData, secretKey: 'YOUR_SECRET_KEY' })
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
    return fetch(`http://localhost:4000/api/articles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to delete the article');
      }
      dispatch({ type: FETCH_ARTICLES_BEGIN }); // Ponownie ładujemy listę artykułów, lub możesz zdefiniować nowy typ akcji
      return fetch('http://localhost:4000/api/articles');
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch articles after deletion');
      }
      return res.json();
    })
    .then(data => {
      // Pomyślnie załadowano aktualizowaną listę artykułów
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: data });
    })
    .catch(error => {
      // Obsługa błędów zarówno dla usuwania, jak i ponownego ładowania artykułów
      dispatch({ type: FETCH_ARTICLES_FAILURE, payload: error });
    })
    .then(() => {
      // Zapewnia, że zwracamy Promise<void>, zwracając explicite 'undefined'
      return undefined;
    });
  };
};