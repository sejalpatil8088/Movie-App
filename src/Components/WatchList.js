import React from 'react';
import { Link } from 'react-router-dom';

const WatchList = ({ currentUser }) => {
  console.log('Current User in WatchList:', currentUser);
  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      
      {currentUser && currentUser.watchlist && currentUser.watchlist.length > 0 ? (
        <div className="movie-grid">
          
          {currentUser.watchlist.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                <h3 className="movie-title">{movie.Title}</h3>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Your watchlist is empty.</p>  
      )}
    </div>
  );
};

export default WatchList;






