import React from 'react';
import BookItem from './BookItem'

export default class List extends React.Component {
  render() {
    return (
      <div>
        <p>List</p>
        <BookItem />
      </div>
    );
  }
}