import React, { Component } from 'react'
import ApiService from "../ApiService";

class AwardsMoviesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            AwardsMoviesList: [],
            message: null
        }
        this.deleteMovieAward = this.deleteMovieAward.bind(this);
        this.editMovieAward = this.editMovieAward.bind(this);
        this.addMovieAward = this.addMovieAward.bind(this);
        this.reloadAwardsMoviesList = this.reloadAwardsMoviesList.bind(this);
    }

    componentDidMount() {
        this.reloadAwardsMoviesList();
    }

    reloadAwardsMoviesList() {
        ApiService.fetchMoviesAwards()
            .then((res) => {
                console.log(res);
                this.setState({AwardsMoviesList: res.data.data})
            });
    }

    deleteMovieAward(MovieAwardId) {
        ApiService.deleteMovieAward(MovieAwardId)
           .then(res => {
               this.setState({message : res.data.message});
               this.setState({AwardsMoviesList: this.state.AwardsMoviesList.filter(MovieAward => MovieAward.id !== MovieAwardId)});
           })
    }

    editMovieAward(MovieId, AwardId) {
        window.localStorage.setItem("MovieId", MovieId);
        window.localStorage.setItem("AwardId", AwardId);
        this.props.history.push('edit-MovieAward');
    }

    addMovieAward() {
        window.localStorage.removeItem("MovieAwardId");
        this.props.history.push('add-movieaward');
    }

    render() {
        return (
            <div>
                <h2 className="page-title">List of Movies with Awards</h2>
                <button className="btn-add" onClick={() => this.addMovieAward()}> Add Record</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="d-none">Id</th>
                            <th>Movie Title</th>
                            <th>Award Title</th>
                            <th>Date Awarded</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.AwardsMoviesList.map(
                                MovieAward =>
                                    <tr key={MovieAward.Movie_Id + " " + MovieAward.Award_Id}>
                                        <td>{MovieAward.movieTitle}</td>
                                        <td>{MovieAward.awardTitle}</td>
                                        <td>{MovieAward.date_awarded ? MovieAward.date_awarded.substring(0,10) : ""}</td>
                                        <td>
                                            <button className="btn-edit" onClick={() => this.editMovieAward(MovieAward.id)}> Edit</button>
                                            <button className="btn-delete" onClick={() => this.deleteAwards(MovieAward.id)}> Delete</button>
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

export default AwardsMoviesList;