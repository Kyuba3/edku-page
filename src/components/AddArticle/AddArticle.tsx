import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { addArticle } from '../../redux/actions/ArticlesActions';
import { useTranslation } from 'react-i18next';


const AddArticle: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useAppDispatch();
  const { t } = useTranslation('translations');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addArticle({ title, content, image }))
      .then(() => {
        setTitle('');
        setContent('');
        setImage('');
      })
      .catch((error) => {
        console.error('Wystąpił błąd:', error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input 
          type='text'
          placeholder='image-src'
          value={image}
          onChange={e => setImage(e.target.value)}
          className='mb-4 p-2 border rounded'
        />
        <input
          type="text"
          placeholder={t('articles.title_placeholder')}
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <textarea
          placeholder={t('articles.content_placeholder')}
          value={content}
          onChange={e => setContent(e.target.value)}
          className="mb-4 p-2 border rounded h-40"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {t('articles.add_article_button')}
        </button>
      </form>
    </div>
  );
};

export default AddArticle;