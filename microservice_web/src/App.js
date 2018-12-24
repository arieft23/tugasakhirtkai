import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";

import HomePage from './component/homePage';
import AddressPage from './component/addressPage';
import AddUser from './component/addUser';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <div className="content">
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/adduser" component={AddUser}/>
            <Route exact path="/showaddress/:name" component={AddressPage}/>
          </div>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
