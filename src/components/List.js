import React from 'react';
import BookItem from './BookItem'

export default class List extends React.Component {
  render() {
    const bookItems = this.props.list.map(book => {
      return <BookItem
        key={book.id}
        title={book.title}
        authors={book.authors}
        price={book.price}
        image={book.image}
        description={book.description}
      />
    });

    return (
      <div>
        <p>List</p>
        {bookItems}
      </div>
    );
  }
}