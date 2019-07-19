import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Login from './container/login';

toast.configure();

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
