import React from 'react';
import Header from './components/Header';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <div className="container cont-top">
        <Header />
        <div className="row">
          <div className="col-12">
            <Users />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
