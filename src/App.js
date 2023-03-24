import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<News apiKey={this.apiKey} key='general' pageSize={12} country='in' category='general' />}></Route>
            <Route path='/business' element={<News apiKey={this.apiKey} key='business' pageSize={12} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News apiKey={this.apiKey} key='entertainment' pageSize={12} country='in' category='entertainment' />}></Route>
            <Route path='/general' element={<News apiKey={this.apiKey} key='general' pageSize={12} country='in' category='general' />}></Route>
            <Route path='/health' element={<News apiKey={this.apiKey} key='health' pageSize={12} country='in' category='health' />}></Route>
            <Route path='/science' element={<News apiKey={this.apiKey} key='science' pageSize={12} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News apiKey={this.apiKey} key='sports' pageSize={12} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News apiKey={this.apiKey} key='technology' pageSize={12} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
