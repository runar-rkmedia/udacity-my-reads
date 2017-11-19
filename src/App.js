import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import ListBooks from './components/ListBooks'
import SearchPage from './components/SearchPage'

class BooksApp extends React.Component {
  state = {}

  render() {
    return (<div className="app">
      <Route exact="exact" path="/search" render={() => (<SearchPage/>)}/>

      <Route exact="exact" path="/" render={() => (<ListBooks/>)}/>
      </div>
      )
  }
}

export default BooksApp
