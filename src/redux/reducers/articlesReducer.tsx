import {
  ArticlesState,
  ArticleActionTypes,
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
} from '../types';

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: null,
};

export const articlesReducer = (state = initialState, action: ArticleActionTypes): ArticlesState => {
  switch (action.type) {
    case FETCH_ARTICLES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: null,
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case ADD_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};