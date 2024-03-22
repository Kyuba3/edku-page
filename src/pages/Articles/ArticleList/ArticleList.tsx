import React, { useEffect, useState } from 'react';
import './ArticleList.scss';
import { Link } from 'react-router-dom';
import { deleteArticle, fetchArticles } from '../../../redux/actions/ArticlesActions';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { useTranslation } from 'react-i18next';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

interface ArticlesListProps {
  limit?: number;
}

interface Article {
  id: string;
  title: string;
  content: string;
  image: string;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ limit }) => {
  const articles = useAppSelector(state => state.articles.articles);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('translations');

  const [user, setUser] = useState(false);

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
      <HiOutlineDotsHorizontal className="article-dot-icon" size={60} />
      <h2 className="text-3xl font-semibold text-center mb-6">
        {t('articles.header')}
      </h2>
      <div className="articlesList flex flex-wrap justify-center gap-4">
        {articles.slice(0, limit || articles.length).map((article : Article) => (
          <article key={article.id} className="article bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out">
            <img src={article.image} alt="img" />
            <h3 className="title text-xl font-semibold m-4">
              {article.title}
            </h3>
            <p className="content text-gray-600 flex-grow m-4">
              {article.content ? article.content.substring(0, 100) : 'Brak treści'}...
            </p>
            <Link 
              to={`/article/${article.id}`} 
              className="py-2 mb-4 rounded read-more"
            >
              {t('articles.read_more_button')}
            </Link>
            {user && (
              <button 
                onClick={() => handleDelete(article.id)} 
                className="py-2 mt-2 mb-2 rounded delete-button"
              >
                {t('articles.delete_article_button')}
              </button>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
