import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menu = (props) => (
  <Router>
    <nav className="menu">
      <ul>
        {
          props.opts.map(opt =>
            <li key={opt.name}>
              <Link to={opt.link}>{opt.name}</Link>
              {/* TODO: replace components */}
              <Route
                path={opt.link}
                component={() => <h1>tests</h1>} />
            </li>
          )
        }
      </ul>
    </nav>
  </Router>
);

export default Menu;
