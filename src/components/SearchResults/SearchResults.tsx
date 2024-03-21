import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface SearchResult {
  id: number;
  name: string;
}

const SearchResults: React.FC = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    // Tutaj powinna znajdować się logika wyszukiwania, np. zapytanie do API
    console.log(`Wyszukiwanie dla zapytania: ${query}`);

    // Przykład statycznych danych
    const staticData: SearchResult[] = [
      { id: 1, name: 'Przykład 1' },
      { id: 2, name: 'Przykład 2' },
    ];

    // Proste filtrowanie na podstawie zapytania
    const filteredData = staticData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredData);
  }, [query]);

  return (
    <div>
      <h2>Wyniki wyszukiwania dla: {query}</h2>
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;