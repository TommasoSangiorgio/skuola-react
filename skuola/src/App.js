import React from 'react';
import Header from './components/Header';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Utenti</h1>
        <Header />
        <Users />
      </div>
    </div >
  );
}

export default App;
