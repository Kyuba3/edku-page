import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetails.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { fetchArticleById } from '../../redux/actions/ArticlesActions';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const article = useSelector((state: AppState) => state.articles.articles.find((a : any) => a.id === id));

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [id, dispatch]);

  if (!article) return <div>Loading...</div>

  return (
    <div className="article-container">
      <img src={article.image} className='flex mx-auto'></img>
      <h1 className="title">{article.title}</h1>
      <p className="content">{article.content}</p>
    </div>
  );
};

export default ArticleDetails;