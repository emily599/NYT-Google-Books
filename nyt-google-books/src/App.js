import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Search from "./components/Search";
import Saved from "./components/Saved";
import { Layout, Menu, Input } from "antd";
import API from "./utils/API";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const { Header, Content, Footer } = Layout;

class App extends Component {
  bookSearch(value) {
    console.log(value);
    API.searchBooks(value).then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <NavLink to="/"> Search</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/saved"> Saved</NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Route exact path="/" component={Search} />
            <Route path="/saved" component={Saved} />
          </Content>
          />
          <Footer style={{ textAlign: "center" }}>
            NYT Google Book Search
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
