import axios from 'axios';
const USER_API_BASE_URL = 'http://localhost:4000/users';
const MOIVE_API_BASE_URL = 'http://localhost:4000/movies';
const AWARD_API_BASE_URL = 'http://localhost:4000/awards';
const AWARD_MOIVE_API_BASE_URL = 'http://localhost:4000/awardsmovies';
// const USER_MOVIE_API_BASE_URL = 'http://localhost:4000/usersmovies';



class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    updateUser(user) {
        return axios.patch(USER_API_BASE_URL + '/' + user.id, user);
    }

    fetchMovies() {
        return axios.get(MOIVE_API_BASE_URL);
    }

    fetchRandomMovies(num) {
        return axios.get(MOIVE_API_BASE_URL +'/random', {
            params: {
              num: num
            }
        });
    }

    fetchMovieById(movieId){
        return axios.get(MOIVE_API_BASE_URL + '/' + movieId);
    }
    
    fetchMovieDetails(movieId) {
        console.log(movieId);
        return axios.get(MOIVE_API_BASE_URL + '/' + movieId + "/details");
    }

    deleteMovie(movieId) {
        return axios.delete(MOIVE_API_BASE_URL + '/' + movieId);
    }

    addMovie(movie) {
        return axios.post(MOIVE_API_BASE_URL,  movie);
    }

    updateMovie(movie) {
        console.log(MOIVE_API_BASE_URL + '/' + movie.id);
        return axios.patch(MOIVE_API_BASE_URL + '/' + movie.id, movie);
    }

    fetchUserMovies(userId) {
        return axios.get(MOIVE_API_BASE_URL + '/' + userId+ '/movies');
    }

    fetchMoviesAwards(){
        return axios.get(AWARD_MOIVE_API_BASE_URL)
    }
    fetchMovieAwards(movieId) {
        return axios.get(MOIVE_API_BASE_URL + '/' + movieId+ '/awards');
    }

    fetchAwards() {
        return axios.get(AWARD_API_BASE_URL);
    }

    fetchAwardById(movieId) {
        return axios.get(AWARD_API_BASE_URL + '/' + movieId);
    }

    deleteAward(movieId) {
        return axios.delete(AWARD_API_BASE_URL + '/' + movieId);
    }

    addAward(award) {
        return axios.post(AWARD_API_BASE_URL, award);
    }

    updateAward(award) {
        return axios.patch(AWARD_API_BASE_URL + '/' + award.id, award);
    }

    updateFilmsAwards(award, movieId, date){
        return axios.patch(AWARD_MOIVE_API_BASE_URL + '/' + movieId, award);
    }

    fetchRandomMovieFromApi(){
        function pad(number, length) {
            var str = '' + number;
            while(str.length < length) {
              str = '0' + str;
            }
            return str;
        }
        return axios.get(`http://www.omdbapi.com/?i=tt${pad(Math.floor((Math.random() * 2155529) + 1), 7)}&apikey=53871d7d&type=movie`);
    }

    fetchMoviesByNameFromApi(){
        return axios.get(`http://www.omdbapi.com/?apikey=53871d7d&type=movie`);
    }

    addAwardsMovies(awardsmovies){
        return axios.post(AWARD_MOIVE_API_BASE_URL, awardsmovies);
    }

    

}

export default new ApiService();