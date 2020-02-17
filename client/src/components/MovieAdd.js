import React, { Component } from 'react'
import ApiService from '../ApiService'
import Fade from 'react-reveal'



class MovieAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            release_date: "",
            global_rating: "",
            plot: "",
            genre: "",
            runtime: "",
            country: "",
            poster: "",
            liked: false,
            validRunime: true,
            validTitle: true,
            allValid: true
        }
        this.reset = this.reset.bind(this)
        this.onChange = this.onChange.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.validateRunime = this.validateRunime.bind(this)
        this.validateTitle = this.validateTitle.bind(this)
    }

    reset(){

    }


    componentDidMount() {
    }

    
    onChange = (e) =>{
        this.validateForm();
            this.setState({
                [e.target.name]: e.target.value 
            })
            console.log(this.state);
        };

    saveChange = (e) => {
            e.preventDefault();

            let movie = {
                    title: this.state.title,
                    release_date: this.state.release_date,
                    global_rating: this.state.global_rating,
                    plot: this.state.plot,
                    genre: this.state.genre,
                    runtime: this.state.runtime,
                    country: this.state.country,
                    poster: this.state.poster 
            };
            console.log(movie);
            ApiService.addMovie(movie)
                .then(res => {
                    this.setState({message : res.data.message});
                    this.props.history.push('/admin/movie-list');
                });
        }
    
        validateForm = () => {
            this.setState({
                validRunime: this.validateRunime(),
                validTitle: this.validateTitle(),
            })
            this.setState({
                allValid: this.state.validRunime && this.state.validTitle
            })
        }

        validateRunime= () => {return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(this.state.runtime);}; 
        validateTitle = () => {return this.state.title != ""};

    
    render(){
        return (
            <div className="edit-container">
                <div className="img-left">
                    <Fade left delay={400}>
                        <img src={this.state.poster ? this.state.poster : "https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" } alt={this.state.title} /> 
                    </Fade>
                </div>
                <div className="info-right">
                        <Fade right cascade delay={800}>
                        <div className="info-row">
                            <label htmlFor="title">
                                Title: 
                            </label>
                            <input name="title" className="input-info" value={this.state.title} onChange={this.onChange}></input>
                        </div>
                        <Fade collapse bottom when={!this.state.validTitle}>
                                <div className="invalid-feedback">
                                    You cannot leave the title empty
                                </div>
                        </Fade>
                        <div className="info-row">
                            <label htmlFor="release_date">
                                Release Date: 
                            </label>
                            <input type='date' name="release_date" className="input-info" value={this.state.release_date ? this.state.release_date.substr(0,10) : ""} onChange={this.onChange}></input>
                        </div>
                        <Fade collapse bottom when={false}>
                                <div className="invalid-feedback">
                                    You cannot leave the title empty
                                </div>
                        </Fade>
                        <div className="info-row">
                            <label htmlFor="runtime">
                                Runtime: 
                            </label>
                            <input name="runtime" className="input-info" value={this.state.runtime ? this.state.runtime : ""} onChange={this.onChange}></input>
                        </div>
                        <Fade collapse bottom when={this.state.validRunime}>
                                <div className="invalid-feedback">
                                    Run time should match such pattern HH:MM:SS
                                </div>
                        </Fade>
                        <div className="info-row">
                            <label htmlFor="global_rating">
                                Global Rating: 
                            </label>
                            <input name="global_rating" className="input-info" value={this.state.global_rating ? this.state.global_rating : ""} onChange={this.onChange}></input>
                        </div>
                        <Fade collapse bottom when={false}>
                                <div className="invalid-feedback">
                                    You cannot leave the title empty
                                </div>
                        </Fade>
                        <div className="info-row">
                            <label htmlFor="plot">
                                Plot: 
                            </label>
                            <textarea name="plot" className="input-info" value={this.state.plot ? this.state.plot : ""} onChange={this.onChange}></textarea>
                        </div>
                        <Fade collapse bottom when={false}>
                                <div className="invalid-feedback">
                                    You cannot leave the title empty
                                </div>
                        </Fade>
                        <div className="info-row">
                            <label htmlFor="genre">
                                Genre: 
                            </label>
                            <input name="genre" className="input-info" value={this.state.genre ? this.state.genre : ""} onChange={this.onChange}></input>
                        </div>
                        <Fade collapse bottom when={false}>
                                <div className="invalid-feedback">
                                    You cannot leave the title empty
                                </div>
                        </Fade>
                        <div className="info-row">
                            <label htmlFor="country">
                                Country: 
                            </label>
                            <input name="country" className="input-info" value={this.state.country ? this.state.country : ""} onChange={this.onChange}></input>
                        </div>
                        <Fade collapse bottom when={false}>
                                <div className="invalid-feedback">
                                    You cannot leave the title empty
                                </div>
                        </Fade>
                        <div className="info-row">
                            <label htmlFor="poster">
                                Poster: 
                            </label>
                            <input name="poster" className="input-info" value={this.state.poster ? this.state.poster : ""} onChange={this.onChange}></input>
                        </div>
                        <Fade collapse bottom when={false}>
                                <div className="invalid-feedback">
                                    You cannot have poster link like this
                                </div>
                        </Fade>
                    </Fade>
                    <button disabled={!this.state.allValid} className="btn-submit" onClick={this.saveChange}>Submit</button>
                </div>
            </div>  
        )
    }
}

export default MovieAdd;