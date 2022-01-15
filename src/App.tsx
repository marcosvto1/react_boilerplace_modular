import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import IndexPage from './pages';
import LoginPage from './pages/login';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={IndexPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
}

export default App;
