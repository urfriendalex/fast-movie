import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal';


class MovieCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: true,
            liked: false,
        }
        this.getDetails = this.getDetails.bind(this)
        this.reset = this.reset.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handeRemove = this.handeRemove.bind(this)
    }

    reset() {
        this.setState({data: []});
    }
    handleChange(event){
        this.setState({num: event.target.value});

    }
    getDetails(){
        console.log(this.props.movie);
        window.localStorage.setItem("movieId", this.props.movie.id);
    }
    handeRemove(){
        this.setState({
            visible: false
        });
    }

    render(){
        return (
            <Fade when={this.state.visible} collapse delay={400}>
                <div className="movieCard">
                    <Link to='movie-details' onClick={this.getDetails} >
                        <img className="card-img-top" src={this.props.movie.poster ? this.props.movie.poster : "https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png"} alt={this.props.movie.title} />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.movie.title}</h5>
                        <p className="card-text">{this.props.movie.plot}</p>
                        <div className="card-btns">
                            <button className="btn-dislike" onClick={this.handeRemove}><FontAwesomeIcon icon={faTimes} /> </button>
                            <button className={"btn-like" + (this.state.liked ? " liked" : "")} ><FontAwesomeIcon icon={faHeart} /></button>
                        </div>
                    </div>
                </div>
            </Fade>  
        )
    }
}

export default MovieCard;