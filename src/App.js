import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Recommended from "./components/Recommended";
import SearchPage from "./components/SearchPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>



    </div>
  );
}

export default App;
