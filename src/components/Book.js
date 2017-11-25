import React, { Component } from 'react'
import { PropTypes } from 'prop-types'


export default class Book extends Component{
  static PropTypes ={
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }
  render(){
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width:128, height:193, backgroundImage: `url("${this.props.imageURL}")`}}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to..</option>
                <option value="currentlyReading">Curently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
          </div>
          <div className="book-title">{`${this.props.title}`}</div>
          <div className="books-authors">{`${this.props.author}`}</div>
        </div>
      </li>
    )
  }
}
