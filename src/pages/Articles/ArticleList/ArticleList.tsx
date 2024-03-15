import React, { useEffect } from 'react';
import './ArticleList.scss';
import { Link } from 'react-router-dom';
import { deleteArticle, fetchArticles } from '../../../redux/actions/ArticlesActions';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';

interface ArticlesListProps {
  limit?: number;
}

interface Article {
  id: string;
  title: string;
  content: string;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ limit }) => {
  const articles = useAppSelector(state => state.articles.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handleDelete = (articleId: string) => {
    dispatch(deleteArticle(articleId))
      .then(() => {
        dispatch(fetchArticles());
      });
  }

  return (
    <div className="my-8 mx-4">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Nasze artykuły</h2>
      <div className="articlesList flex flex-wrap justify-center gap-4">
        {articles.slice(0, limit || articles.length).map((article : Article) => (
          <article key={article.id} className="article bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <h3 className="title text-xl font-semibold m-4">{article.title}</h3>
            <p className="content text-gray-600 flex-grow m-4">{article.content.substring(0, 100)}...</p>
            <Link to={`/article/${article.id}`} className="block text-center w-full py-2 bg-blue-500 text-white rounded-b-lg hover:bg-blue-700 transition-colors duration-300">Czytaj więcej</Link>
            <button onClick={() => handleDelete(article.id)} className="block text-center w-full py-2 bg-blue-500 text-white rounded-b-lg hover:bg-blue-700 transition-colors duration-300">Usuń artykuł</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
