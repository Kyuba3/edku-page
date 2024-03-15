export interface Article {
  id?: string;
  title: string;
  content: string;
}

export interface ArticlesState {
  articles: Article[];
  loading: boolean;
  error: Error | null;
}

export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS';
export const ADD_ARTICLE_FAILURE = 'ADD_ARTICLE_FAILURE';

interface FetchArticlesBeginAction {
  type: typeof FETCH_ARTICLES_BEGIN;
}

interface FetchArticlesSuccessAction {
  type: typeof FETCH_ARTICLES_SUCCESS;
  payload: Article[];
}

interface FetchArticlesFailureAction {
  type: typeof FETCH_ARTICLES_FAILURE;
  payload: Error;
}

interface AddArticleSuccessAction {
  type: typeof ADD_ARTICLE_SUCCESS;
  payload: Article;
}

interface AddArticleFailureAction {
  type: typeof ADD_ARTICLE_FAILURE;
  payload: Error;
}

export type ArticleActionTypes =
  | FetchArticlesBeginAction
  | FetchArticlesSuccessAction
  | FetchArticlesFailureAction
  | AddArticleSuccessAction
  | AddArticleFailureAction;