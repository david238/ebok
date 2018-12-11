import React, { Component } from 'react';
import toronto from './assets/toronto.jpg'
import Contact from './components/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={toronto} className="App-logo" alt="logo" />
        </header>
        <Contact>asd</Contact>
      </div>
    );
  }
}

export default App;
