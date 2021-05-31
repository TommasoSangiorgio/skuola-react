import React from 'react';
import Header from './components/Header';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <h1>Utenti</h1>
      <Header />
      <div className="container">
        <Users />
      </div>
    </div>
  );
}

export default App;
