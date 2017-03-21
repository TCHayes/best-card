import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//***** temp import for testing *****
import CategoryList from './components/category-list';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>BestCard Rewards Card Picker</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
