import './App.css';
import React from 'react';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  fetchSearch = (query, print, book) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}?printType=${print}?filter=${book}`)
    .then(res => { 
      if(!res.ok) { throw new Error('Something went wrong, please try again later'); 
      } return res.json(); 
    })
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Search fetchSearch={this.fetchSearch}/>
        <List />
      </div>
    );
  }
}
