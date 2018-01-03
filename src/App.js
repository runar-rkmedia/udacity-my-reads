import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import ListBooks from './components/ListBooks'
import SearchPage from './components/SearchPage'

export default class BooksApp extends Component {
  state = {
    books: {}
  }

  componentDidMount() {
    this.fetchMyBooks()
  }

  fetchMyBooks = () => {
    BooksAPI.getAll().then((books) => {
      const booksHash = books.reduce((prev, book) => {
        prev[book.id] = book
        return prev
      }, {})
      this.setState({
        books: booksHash
      })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book.id, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => {
        const newState = { ...state
        }
        newState.books[book.id] = book
        return newState
      })
    })
  }


  render() {
    const { books } = this.state
    const booksArray = Object.keys(books).map(key => books[key])
    return (
      <Switch>
          <Route
            exact
            path="/search"
            render={({history}) => (
              <SearchPage
                myBooks={booksArray}
                onShelfChange={(book,shelf)=>{
                  this.changeShelf(book,shelf)
                  history.push('/')
                }}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={()=>(
              <ListBooks
                books={booksArray}
                onShelfChange={(book,shelf)=>{
                  this.changeShelf(book,shelf)
                }}
              />
            )}
          />

      </Switch>
    )
  }
}
