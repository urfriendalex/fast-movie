const db = require('../db/mysql');


class AwardsMovies {
    constructor(Movie_Id,Award_Id, Movie_Title,Award_Title, release_date, global_rating, plot, genre, runtime, country, poster, date_awarded) {
        this.Movie_Id = Movie_Id;
        this.Award_Id = Award_Id;
        this.Movie_Title = Movie_Title;
        this.Award_Title = Award_Title;
        this.release_date = release_date;
        this.global_rating = global_rating;
        this.plot = plot;
        this.genre = genre;
        this.runtime = runtime;
        this.country = country;
        this.poster = poster;
        this.date_awarded = date_awarded;
    }

    static list() {
        return db.execute("SELECT * FROM awardmovieinfo");
    }

    static add_awards_movies(awardsMovies){
        return db.execute("INSERT INTO movieaward values (?,?,?)", [awardsMovies.Movie_Id, awardsMovies.Award_Id, awardsMovies.date_awarded])
    }
}
    
module.exports = AwardsMovies;