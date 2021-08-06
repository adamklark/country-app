import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/a-propos" exact component={About} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;