import React from 'react'
import Film from '../moovies.json'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

           
           <div id="card-list">
            
           {Film.map(film =>(
               <div id="card">
               <img src={film.image} alt="" />

               <Link to={`/film/${film.id}`}> <h2>{film.title}</h2> </Link>

               <h4>{film.director}</h4>

               <ul>

                   <li>{film.stars[0]}</li>
                   <li>{film.stars[1]}</li>
                   <li>{film.stars[2]}</li>
                   
               </ul>
               </div>
           ))}


       </div>

         );
    }
}
 
export default List;