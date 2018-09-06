import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import New from "./components/New";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route path ="/New" component={New} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
