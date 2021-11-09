import React from 'react'
import { Route, Switch, BrowserRouter as Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Prices from '../pages/Prices';

function RoutesComponents() {
  return (
    <Routes>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/prices" component={Prices}/>
      </Switch>
    </Routes>
  )
}

export default RoutesComponents
