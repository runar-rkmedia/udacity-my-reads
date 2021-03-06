import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'

import BookShelf from './BookShelf'

export default class ListBooks extends Component {
  static propTypes = {
      books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        imageLinks: PropTypes.object.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string.isRequired),
        id: PropTypes.string.isRequired,
      })),
      onShelfChange: PropTypes.func.isRequired
    }

    shelfs = [
      {
        name: `currentlyReading`,
        heading: `Currently Reading`
      },
      {
        name: `wantToRead`,
        heading: `Want to Read`
      },
      {
        name: `read`,
        heading: `Read`
      },
    ]

    render(){
      const shelfs = this.shelfs
      const books = this.props.books

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              { shelfs.map((shelf)=> (
                <BookShelf
                  title={shelf.heading}
                  key={shelf.id}
                  books={books.filter((book) => book.shelf === shelf.name)}
                  onShelfChange={(id,shelf)=>{
                    this.props.onShelfChange(id,shelf)
                  }}
                />
              )) }
            </div>
          </div>
          <div className="open-search">
            <Link
              to="/search"
            >Add book</Link>
          </div>
        </div>
      )
    }
  }
