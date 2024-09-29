import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ currentUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let url = '';
      
      
      if (searchTerm.trim() === '') {
        url = `http://www.omdbapi.com/?s=batman&apikey=7c2b319f`; 
      } else {
       
        url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=7c2b319f`;
      }
      
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Search || []);
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="movie-list">
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
          className="search-input"
        />
      </div>
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={`${movie.imdbID}-${index}`} className="movie-card" >
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                <h3 className="movie-title">{movie.Title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;



