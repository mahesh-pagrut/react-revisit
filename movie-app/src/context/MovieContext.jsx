import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(() => {

    const stored = localStorage.getItem('movies');
    return stored ? JSON.parse(stored) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
    console.log('Initial movies from localStorage:', movies);
  }, [movies]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
