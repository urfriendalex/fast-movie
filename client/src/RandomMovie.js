import React, { Component } from 'react'
import MovieCard from "./components/MoiveCard";
import ApiService from './ApiService'
import HorizontalScroll from 'react-scroll-horizontal'
import { faGuitar } from '@fortawesome/free-solid-svg-icons';

class RandomMovie extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            num: ''
        }
        this.onClick = this.onClick.bind(this)
        this.reset = this.reset.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    reset() {
        this.setState({data: []});
    }

    handleChange(e){
        const re = /^[0-9\b]+$/;
        this.setState({num: e.target.value === '' || re.test(e.target.value) ? e.target.value : ''});
    }
    onClick(event){
        event.preventDefault();
        ApiService.fetchRandomMovies(this.state.num)
            .then((res) => {
                this.setState({data: res.data.data})
            });
    }

    render(){
        return (
            <div className="randomMovieContainer">
                <form className="pull-form">
                    <button onClick={this.onClick}>get random movie</button>
                    <input type="number" pattern='[0-9]{0,5}' value={this.state.num} placeholder="0" onChange={this.handleChange} />
                </form>
                <i class="fa fa-adjust" aria-hidden="true"></i>
                <HorizontalScroll>
                    {
                        this.state.data.map(
                            movie =>
                            <MovieCard key={movie.id} movie = {movie} />
                        )
                    }
                </HorizontalScroll>
            </div>
        )
    }
}

export default RandomMovie;