import React from 'react';

export default class BookItem extends React.Component {
  render() {
    return (
      <div>
        <p>Book Item</p>
        <h2>{this.props.title}</h2>
        <p>{this.props.authors}</p>
        <p>{this.props.price}</p>
        <img src={this.props.image} alt="test" />
        <p>{this.props.description}</p>
      </div>
    );
  }
}