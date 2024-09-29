import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email);
    setEmail('');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form  onSubmit={handleSubmit}>
        <input
          type="email"
          className='login-form'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;