import React, { Component }  from 'react';
//import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router,
   Route, 
   Link,
   Switch
   } from "react-router-dom";

import './App.css';
import './pages/HomePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

//---------We IMported Switch in from rout-dom and used it bellow becouse
//----when you don't specify the path like we did not for NotFoundPage it displays in all the pages
//---the Swich will fix this by displaying the first rout it matches
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
        
        <Switch>
          <Route path="/" exact component={HomePage} exact />
          <Route path="/about/" component={AboutPage} />
          <Route path="/article-list/" component={ArticleListPage} />
          <Route path="/article/:name" component={ArticlePage} />
          <Route component={NotFoundPage}></Route>
        </Switch>
        
      </div>
      </div>
    </Router>
      

  );
}

export default App;
