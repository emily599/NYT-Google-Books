import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";
const { Meta } = Card;

class BookCard extends Component {
  saveBook(value) {}
  render() {
    return (
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={this.props.image} />}
      >
        <h4>{this.props.title}</h4>
        {this.props.authors.map(author => {
          return <h6>{author}</h6>;
        })}
        <p>{this.props.description}</p>
        <a href={this.props.link} target="_blank">
          Link
        </a>
        <button />
      </Card>
    );
  }
}

export default BookCard;
