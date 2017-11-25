import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import ListBooks from './components/ListBooks'
import SearchPage from './components/SearchPage'

class BooksApp extends Component {
  state = {
    books: []
  }

  shelfs = [

    {
      name: 'currentlyReading',
      heading: 'Currently Reading'
    }, {
      name: 'wantToRead',
      heading: "Want to Read"
    }, {
      name: 'read',
      heading: 'Read'
    }
  ]

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({books}))
  }

  render() {
    return (<div className="app">
      <Route exact="exact" path="/search" render={() => (<SearchPage/>)}/>

      <Route exact="exact" path="/" render={() => (<ListBooks shelfs={this.shelfs} books={this.state.books}/>)}/>
    </div>)
  }
}

export default BooksApp
