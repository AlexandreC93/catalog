import React from 'react'
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Film from './moovies'
import List from './components/List';
import Moovie from './components/Moovie'
import Error404 from './components/Error404';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      films: []

    }
  }
  render() {
    console.log(Film);
    return (

      <BrowserRouter>


        <Switch>
          <Route exact path="/film" component={List} />
          {Film.map(film => (

            <Route path={`/film/:id`} component={Moovie} />
            

          ))}
            <Route path="*" component={Error404}/>

        </Switch>

      </BrowserRouter>
    );
  }
}




