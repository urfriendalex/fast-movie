import React, { Component } from 'react'
import ApiService from '../ApiService'
import Fade from 'react-reveal'



class MovieDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieinfo: {},
            awards: [],
            liked: false
        }
        this.reset = this.reset.bind(this)
        this.loadDeatiledInfo = this.loadDeatiledInfo.bind(this)
    }

    reset() {
    }

    componentDidMount() {
        this.loadDeatiledInfo();
    }

    loadDeatiledInfo() {
        ApiService.fetchMovieDetails(window.localStorage.getItem("movieId"))
            .then((res) => {
                console.log(res)
                let movieDetails = res.data.data;
                this.setState({
                    movieinfo: movieDetails.movieinfo[0],
                    awards: movieDetails.awards
                })
            });
    }
    
    render(){
        console.log(this.state);
        return (
            <div className="details-container">
                <div className="img-left">
                    <Fade delay={400}>
                        <img src={this.state.movieinfo.poster ? this.state.movieinfo.poster : "https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" } alt={this.state.movieinfo.title} /> 
                    </Fade>
                </div>
                <div className="info-right">
                        <Fade delay={800}>
                        <div className="info-row">
                            <label htmlFor="title">
                                Title: 
                            </label>
                            <input disabled readOnly name="title" className="input-info" value={this.state.movieinfo.title} onChange={this.onChange}></input>
                        </div>
                        <div className="info-row">
                            <label htmlFor="release_date">
                                Release Date: 
                            </label>
                            <input disabled readOnly type='date' name="release_date" className="input-info" value={this.state.movieinfo.release_date ? this.state.movieinfo.release_date.substring(0,10) : ""} onChange={this.onChange}></input>
                        </div>
                        <div className="info-row">
                            <label htmlFor="runtime">
                                Runtime: 
                            </label>
                            <input disabled readOnly name="runtime" className="input-info" value={this.state.movieinfo.runtime ? this.state.movieinfo.runtime : ""} onChange={this.onChange}></input>
                        </div>
                        <div className="info-row">
                            <label htmlFor="global_rating">
                                Global Rating: 
                            </label>
                            <input disabled readOnly name="global_rating" className="input-info" value={this.state.movieinfo.global_rating ? this.state.movieinfo.global_rating : ""} onChange={this.onChange}></input>
                        </div>
                        <div className="info-row">
                            <label htmlFor="plot">
                                Plot: 
                            </label>
                            <textarea disabled name="plot" className="input-info" value={this.state.movieinfo.plot ? this.state.movieinfo.plot : ""} onChange={this.onChange}></textarea>
                        </div>
                        <div className="info-row">
                            <label htmlFor="genre">
                                Genre: 
                            </label>
                            <input disabled readOnly name="genre" className="input-info" value={this.state.movieinfo.genre ? this.state.movieinfo.genre : ""} onChange={this.onChange}></input>
                        </div>
                        <div className="info-row">
                            <label htmlFor="country">
                                Country: 
                            </label>
                            <input disabled readOnly name="country" className="input-info" value={this.state.movieinfo.country ? this.state.movieinfo.country : ""} onChange={this.onChange}></input>
                        </div>
                        <label style={
                            {marginTop: "5rem"}
                            }>
                                    awards: 
                        </label>
                        {   
                            this.state.awards.length !== 0 ? 
                            this.state.awards.map( award =>
                                <div key={award.Award_id}>
                                    <input  className="input-info"  disabled  value={award.awardTitle ? award.awardTitle : ''}></input>
                                    <input className="input-info" type="date" disabled  value={award.date_awarded ? award.date_awarded.substring(0,10) : ''}></input>
                                </div>
                            )
                            : <div>No awards</div>
                            }
                    </Fade>
                </div>
            </div>  
        )
    }
}

export default MovieDetails;