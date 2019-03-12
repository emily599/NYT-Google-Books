import React, { Component } from "react";
import { Layout, Menu, Input } from "antd";
import API from "./../utils/API";
import BookCard from "./BookCard";

const InputSearch = Input.Search;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  bookSearch(value) {
    console.log(value);
    API.searchBooks(value).then(response => {
      console.log(response.data.items);
      this.setState({
        books: response.data.items
      });
    });
  }

  render() {
    return (
      <div>
        <div style={{ background: "#fff", padding: 24, minHeight: 50 }}>
          NYT Google Book Search
        </div>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <InputSearch
            placeholder="input search text"
            onSearch={value => this.bookSearch(value)}
            style={{ width: 200 }}
          />
        </div>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          Results:
          {this.state.books.map((book, i) => {
            return (
              <BookCard
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
              />
            );
          })}
          ;
        </div>
      </div>
    );
  }
}

export default Search;
