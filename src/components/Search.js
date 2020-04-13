import React from 'react';

export default class Search extends React.Component {

  fetchSearch = () => {

  }

  render() {
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" placeholder="book title" />
        <label htmlFor="print-type">Print Type: </label>
        <select id="print-type" >
          <option value="test0"></option>
          <option value="test1"></option>
          <option value="test2"></option>
          <option value="test3"></option>
        </select>

        <label htmlFor="book-type">Book Type: </label>
        <select id="book-type" >
          <option value="test0"></option>
          <option value="test1"></option>
          <option value="test2"></option>
          <option value="test3"></option>
        </select>

      </div>
    );
  }
}