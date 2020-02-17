import React, { Component } from 'react';
import ApiService from "./ApiService";

class MovieApiFetch extends Component {

    constructor(props){
        super(props);
        this.state ={
            data: []
        }
    }

    componentDidMount(){
        for (let i = 0; i<50; i++){
        ApiService.fetchRandomMovieFromApi()
            .then(res => {
                let tmpData = this.state.data;
                tmpData.push(res.data);
                this.setState({
                    data: tmpData
                })
            });
        }
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
               <div>INSERT IGNORE INTO `movieapp`.`movie` ( `title`, `release_date`,`global_rating`,`plot`,`genre`, `runtime`,`country`,`poster`) VALUES </div>
                     {this.state.data.map(m=>
                       <div key={m.imdbID}>("{m.Title}",STR_TO_DATE("{m.Released}", '%d %b %y'),"{m.Rating}","{m.Plot}","{m.Genre}","{m.Runtime}","{m.Country}","{m.Poster}"),</div>
                     )}
            </div>
            
        );
    }
}


export default MovieApiFetch;