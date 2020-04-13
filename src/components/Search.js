import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(textInput.value)
        const value = target.name === 'isGoing' ? target.checked : target.value;
        // this.props.fetchSearch(e.target, 'books', 'ebooks')
      }}>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" placeholder="book title" name="search"/>

        <label htmlFor="print-type">Print Type: </label>
        <select id="print-type" name="print-type">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>

        <label htmlFor="book-type">Book Type: </label>
        <select id="book-type" name="book-type">
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free-eBooks</option>
          <option value="full">Full</option>
          <option value="paid-ebooks">Paid-eBooks</option>
          <option value="partial">Partial</option>
        </select>
        <button type="submit">Submit Search</button>
      </form>
    );
  }
}