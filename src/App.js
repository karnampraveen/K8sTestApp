import React from 'react';
import './App.css';
import myImage from './images/my-image.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My 2nd React App</h1>
        <p>Everyday is a school day</p>
      </header>
      <div className="image-wrapper">
        <img src={myImage} alt="Classroom" />
      </div>
    </div>
  );
}

export default App;
