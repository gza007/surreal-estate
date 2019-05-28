import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/app.css';
import NavBar from './navBar';
import Properties from './properties';
import AddProperty from './addProperty';


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
  </div>
);

export default App;
