import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

import Book from './Book'

export default class BookShelf extends Component {

  static propTypes={
    title: PropTypes.string.isRequired,
    books: PropTypes.array,
    onShelfChange: PropTypes.func.isRequired
  }

  render(){
    const {books, onShelfChange} = this.props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book)=>(
              <Book
                book={book}
                key={book.id}
                onShelfChange={onShelfChange}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
