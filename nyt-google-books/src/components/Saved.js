import React, { Component } from "react";
import { Layout, Menu, Input } from "antd";
import API from "./../utils/API";

const InputSearch = Input.Search;

class Saved extends Component {
  render() {
    return (
      <div>
        <div style={{ background: "#fff", padding: 24, minHeight: 50 }}>
          Saved Books
        </div>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }} />
      </div>
    );
  }
}

export default Saved;
