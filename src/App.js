import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import ListBooks from './components/ListBooks'
import SearchPage from './components/SearchPage'

export default class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.fetchMyBooks()
  }

  fetchMyBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({books}))
  }

  changeShelf = (bookId, shelf) => {
      console.log(bookId, shelf)
      BooksAPI.update(bookId, shelf).then(() => {
        this.setState(state => {
          console.log(state)
          let books = state.books.slice()
          let bookToChange = books.find(book => book.id === bookId)
          if (bookToChange) {
            bookToChange.shelf = shelf
          }
          return (
            this.setState(
              {books : this.state.books}
            )
          )
      })
    })
  }


  render() {
    return (
      <Switch>
          <Route
            exact
            path="/search"
            render={({history}) => (
              <SearchPage
                myBooks={this.state.books}
                onShelfChange={(id,shelf)=>{
                  this.changeShelf(id,shelf)
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
                books={this.state.books}
                onShelfChange={(id,shelf)=>{
                  this.changeShelf(id,shelf)
                }}
              />
            )}
          />

      </Switch>
    )
  }
}
