import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function MyApp() {
  const [joke, setJoke] = useState('');
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
     .then(response => response.json())
     .then(data => setJoke(data.setup + ' '+ data.punchline));
  }, []);

  const handleClick = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
     .then(response => response.json())
     .then(data => {
        setJoke(data.setup + ' '+ data.punchline);
        setJokes([...jokes, data.setup + ' '+ data.punchline]);
      });
  };

  return (
    <div className="container">
      <h1 className="header">Joke Generator</h1>
      <button className="button" onClick={handleClick}>
        Get a new joke now!
      </button>
      <div className="joke">{joke}</div>
      <table className="joke-table">
        <thead>
          <tr>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyApp;