import React, { Component } from 'react'
import ApiService from "../ApiService";
import Select from 'react-select'

class AwardsMoviesAdd extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedMovie: null,
            selectedAward: null,
            moviesOptions: [],
            awardsOptions: [],
            date_awarded: '2000-01-01'
        }
        // this.moviesOptions = [];
        // this.awardsOptions = [];
        this.loadMoviesAndAwards = this.loadMoviesAndAwards.bind(this);
        this.saveChange = this.saveChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    loadMoviesAndAwards = () => {
        ApiService.fetchMovies()
        .then((res) =>{
            this.setState({
                moviesOptions: res.data.data
            })
        })
        ApiService.fetchAwards()
        .then((res) =>{
            this.setState({
                awardsOptions: res.data.data
            })
        })
    }

    componentDidMount() {
       this.loadMoviesAndAwards();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    saveChange = (e) => {
        e.preventDefault();

        let awardsmovies = {
                Award_Id: this.state.selectedAward.value,
                Movie_Id: this.state.selectedMovie.value,
                date_awarded: this.state.date_awarded
        };
        console.log(awardsmovies);
        ApiService.addAwardsMovies(awardsmovies)
            .then(res => {
                this.setState({message : res.data.message});
                this.props.history.push('/admin/awardsmovies-list');
            });
    }
    
    render() {
        return (
            <div>
                <h2 className="page-title">Add new Movies with Awards</h2>
                <div className='select-container'>
                <Select options={this.state.awardsOptions.map(a => new Object({
                    value: a.id,
                    label: a.title
                }))}
                onChange={value => this.setState({ selectedMovie: value })}
                />
                <Select options={this.state.moviesOptions.map(m => new Object({
                    value: m.id,
                    label: m.title
                }))}
                onChange={value => this.setState({ selectedAward: value })}
                />
                </div>
                <div className="select-container">
                    <input type="date" name="date_awarded" value={this.state.date_awarded ? this.state.date_awarded.substr(0,10) : ""} onChange={this.onChange} ></input>
                </div>
                <div className="submit-container">
                    <button className='btn-submit' onClick={this.saveChange}>Submit</button>
                </div>
            </div>
        );
    }

}

export default AwardsMoviesAdd;