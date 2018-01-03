import React, { Component } from 'react'
import { PropTypes } from 'prop-types'


export default class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render(){
    const {book, onShelfChange} = this.props
    const {shelf, title, author, imageLinks} = book
    const imageURL = imageLinks.thumbnail || imageLinks.smallThumbnail
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${imageURL}")`}}>
            </div>
            <div className="book-shelf-changer">
              <select onChange={(e) => onShelfChange(book, e.target.value)} value={shelf || 'none'}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{`${title}`}</div>
          {author && author.map((author,index)=>(
            <div className="book-authors" key={index}>
              {`${author}`}
            </div>
          ))}
        </div>
      </li>
    )
  }
}
