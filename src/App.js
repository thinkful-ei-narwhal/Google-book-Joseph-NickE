import './App.css';
import React from 'react';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: test
    }
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Search />
        <List />
      </div>
    );
  }
}
