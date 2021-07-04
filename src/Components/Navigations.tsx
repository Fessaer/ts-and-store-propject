import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import SettngsPage from './Pages/Settings';
import TestRender from "./Pages/TestRender";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function AppRouter() {
  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/settngs">Settings</Link>
            </li>
            <li>
              <Link to="/TestRender">TestRender</Link>
            </li>
            
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/settngs" component={SettngsPage} />
        <Route path="/TestRender" component={TestRender} />
      </div>
    </Router>
  );
}

export default AppRouter;
