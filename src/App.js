import React, { Component } from 'react';
import './App.css';
import routes from './routes.js';
import Header from './Components/Header/Header.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      {routes}
      </div>
    );
  }
}

export default App;
