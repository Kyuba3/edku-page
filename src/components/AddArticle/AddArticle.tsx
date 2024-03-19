import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { addArticle } from '../../redux/actions/ArticlesActions';


const AddArticle: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState(0);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addArticle({ id, title, content }))
      .then(() => {
        setId(0);
        setTitle('');
        setContent('');
      })
      .catch((error) => {
        console.error('Wystąpił błąd:', error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="number"
          placeholder='id artykułu'
          value={id}
          onChange={e => setId(id)}
          className='mb-4 p-2 border rounded'
        />
        <input
          type="text"
          placeholder="Tytuł artykułu"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <textarea
          placeholder="Treść artykułu"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="mb-4 p-2 border rounded h-40"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Dodaj artykuł
        </button>
      </form>
    </div>
  );
};

export default AddArticle;