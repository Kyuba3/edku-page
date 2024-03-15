import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { addArticle } from '../../redux/actions/ArticlesActions';


const AddArticle: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Dodaj nagłówek dla autoryzacji, jeśli jest wymagany
          // 'Authorization': 'Bearer yourTokenHere',
        },
        body: JSON.stringify({ title, content, secretKey: 'YOUR_SECRET_KEY' }) // Załóżmy, że backend wymaga również 'secretKey'
      });

      if (!response.ok) {
        throw new Error('Problem z dodaniem artykułu');
      }

      // Opcjonalnie: Reset stanu po pomyślnym dodaniu
      setTitle('');
      setContent('');

      const result = await response.json();
      console.log('Artykuł dodany pomyślnie:', result);
      // Opcjonalnie: Możesz tutaj przekierować użytkownika lub odświeżyć listę artykułów
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
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