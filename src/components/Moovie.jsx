import React from 'react'
import Films from '../moovies'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


class Moovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        

        const movie = Films.find(film => {
            
        return parseInt(this.props.match.params.id) === film.id 
        })
        console.log( movie, "match");
    //    console.log(this.props);
        return (

            <div id="list">


                 <h2>{movie.description}</h2>

            
                   
                
            

            </div>

        );
    }
}

export default Moovie;