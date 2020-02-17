import React, { Component } from 'react'
import ApiService from "../ApiService";

class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
            message: null
        }
        this.deleteMovie = this.deleteMovie.bind(this);
        this.editMovie = this.editMovie.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.reloadmovieList = this.reloadmovieList.bind(this);
    }

    componentDidMount() {
        this.reloadmovieList();
    }

    reloadmovieList() {
        ApiService.fetchMovies()
            .then((res) => {
                console.log(res);
                this.setState({movieList: res.data.data})
            });
    }

    deleteMovie(movieId) {
        ApiService.deleteMovie(movieId)
           .then(res => {
               this.setState({message : res.data.message});
               this.setState({movieList: this.state.movieList.filter(movie => movie.id !== movieId)});
           })

    }

    editMovie(id) {
        window.localStorage.setItem("movieId", id);
        this.props.history.push('edit-movie');
    }

    addMovie() {
        window.localStorage.removeItem("movieId");
        this.props.history.push('add-movie');
    }

    render() {
        return (
            <div>
                <h2 className="page-title">List of Movies</h2>
                <button className="btn-add" onClick={() => this.addMovie()}> Add Movie</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="d-none">Id</th>
                            <th>Title</th>
                            <th>Release date</th>
                            <th>Global Rating</th>
                            <th>Plot</th>
                            <th>Genre</th>
                            <th>Runtime</th>
                            <th>Country</th>
                            <th>Poster</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movieList.map(
                        movie =>
                                    <tr key={movie.id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.release_date ? movie.release_date.substring(0,10) : ""}</td>
                                        <td>{movie.global_rating ? movie.global_rating.toFixed(1) : ""}</td>
                                        <td>{movie.plot}</td>
                                        <td>{movie.genre}</td>
                                        <td>{movie.runtime}</td>
                                        <td>{movie.country}</td>
                                        <td>{movie.poster}</td>
                                        <td>
                                            <button className="btn-edit" onClick={() => this.editMovie(movie.id)}> Edit</button>
                                            <button className="btn-delete" onClick={() => this.deleteMovie(movie.id)}> Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default MovieList;