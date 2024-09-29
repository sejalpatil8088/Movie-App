import "./App.css";
import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import Watchlist from './Components/WatchList';
import Login from './Components/Login';
import Register from './Components/Register';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  
  const handleLogin = (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email);
    if (user) {
      setCurrentUser(user);
    } else {
      alert('Invalid email address');
    }
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleRegister = (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find((u) => u.email === email)) {
      alert('User already exists');
      return;
    }
  
    const user = { email, watchlist: [] };
    localStorage.setItem('users', [JSON.stringify([...users, user])]);
    setCurrentUser(user);
  };

  const removeFromWatchlist = (movieId) => {
    if (currentUser) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updatedWatchlist = currentUser.watchlist.filter(movie => movie.imdbID !== movieId);
      const updatedUser = Object.assign(currentUser, { watchlist: updatedWatchlist });
      const updatedUsers = users.map((u) => (u.email === currentUser.email ? updatedUser : u));
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setCurrentUser(updatedUser); 
      console.log('Users in Local Storage:', JSON.parse(localStorage.getItem('users')));
      alert('Movie removed from your watchlist!');
    }
  };

  return (
    <Router>
      <div className="app">
        <Header currentUser={currentUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<MovieList currentUser={currentUser}/>} />
          <Route path="/movie/:id" element={<MovieDetails currentUser={currentUser}/>} />
          <Route path="/watchlist" element={<Watchlist currentUser={currentUser} removeFromWatchlist={removeFromWatchlist} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;





