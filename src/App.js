import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
// import ArticlePage from './pages/ArticlePage';
// import ArticlesListPage from './pages/ArticlesListPage';
// import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import Home from './pages/HomePage'
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/articles" exact element={<ArticlesListPage />} /> */}
            {/* <Route path="/articles/:name" element={<ArticlePage />} /> */}
            <Route component={NotFoundPage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
