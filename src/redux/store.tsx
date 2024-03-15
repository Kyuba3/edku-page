import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { thunk, ThunkDispatch } from 'redux-thunk';
import { articlesReducer } from './reducers/articlesReducer';
import { ArticleActionTypes } from './types';

const rootReducer: any = combineReducers({
  articles: articlesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppAction = ArticleActionTypes;
export type AppDispatch = ThunkDispatch<AppState, any, AppAction>;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;