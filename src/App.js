import './App.css';
import React from 'react';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        search: '',
        printTypeChanged: '',
        bookTypeChanged: ''
      },
      bookList: {
        book1: {
          title: '',
          authors: [],
          price: '',
          image: '',
          description: '',
        }
      }
    }
  }

  searchChanged = (e) => {
    this.setState({
      formData: {
        search: e.target.value,
        printType: this.state.formData.printType,
        bookType: this.state.formData.bookType,
      }
    });
  }

  printTypeChanged = (e) => {
    this.setState({
      formData: {
        search: this.state.formData.search,
        printType: e.target.value,
        bookType: this.state.formData.bookType,
      }
    });
  }

  bookTypeChanged = (e) => {
    this.setState({
      formData: {
        search: this.state.formData.search,
        printType: this.state.formData.printType,
        bookType: e.target.value
      }
    });
  }


  fetchSearch = (e) => {
    e.preventDefault();
    // query, print, book
    const query = this.state.formData.search;
    const print = this.state.formData.printType;
    const book = this.state.formData.bookType;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}?printType=${print}?filter=${book}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        } return res.json();
      })
      .then(data => data.items)
      .then(books => { 
        let final = books.map(book => {
          let title = book.volumeInfo.title;
          let authors = book.volumeInfo.authors;
          let price = book.saleInfo.retailPrice;
          let image = book.volumeInfo.imageLinks.thumbnail;
          let description = book.volumeInfo.description;
          console.log(price)
          // return {title, authors, price, image, description}
        })
      this.setState({
        bookList: final
      })
    })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Search fetchSearch={this.fetchSearch} searchChanged={this.searchChanged} printTypeChanged={this.printTypeChanged} bookTypeChanged={this.bookTypeChanged} />
        <List />
      </div>
    );
  }
}
