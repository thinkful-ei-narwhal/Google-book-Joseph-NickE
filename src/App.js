import './App.css';
import React from 'react';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      printType: 'all',
      bookType: 'eBooks',
      bookList: []
    }
  }

  searchChanged = (e) => {
    this.setState({
      search: e.target.value,
      printType: this.state.printType,
      bookType: this.state.bookType
    });
  }

  printTypeChanged = (e) => {
    this.setState({
      search: this.state.search,
      printType: e.target.value,
      bookType: this.state.bookType,
    });
  }

  bookTypeChanged = (e) => {
    this.setState({
      search: this.state.search,
      printType: this.state.printType,
      bookType: e.target.value
    });
  }


  fetchSearch = (e) => {
    e.preventDefault();
    const query = this.state.search;
    const print = this.state.printType;
    const book = this.state.bookType;

    e.target.search.value = '';
    console.log(query);

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${print}&filter=${book}`)
      .then(res => {
        if (!res.ok) {
          return Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => data.items)
      .then(books =>
        books.map(book => {
          let id = book.id;
          let title = book.volumeInfo.title;
          let authors = book.volumeInfo.authors;
          let price = book.saleInfo.saleability.includes('NOT_FOR_SALE') ? '0' : book.saleInfo.retailPrice.amount;
          let image = book.volumeInfo.imageLinks.thumbnail;
          let description = book.volumeInfo.description;
          return { id, title, authors, price, image, description };
        })
      )
      .then(bookList => this.setState({ bookList: bookList }))
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Search fetchSearch={this.fetchSearch} searchChanged={this.searchChanged} printTypeChanged={this.printTypeChanged} bookTypeChanged={this.bookTypeChanged} />
        <List list={this.state.bookList} />
      </div>
    );
  }
}
