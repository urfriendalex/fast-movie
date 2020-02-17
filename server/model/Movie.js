const db = require('../db/mysql');


class Movie {
    constructor(id, title, release_date, global_rating, plot, genre, runtime, country, poster) {
        this.id = id;
        this.title = title;
        this.release_date = release_date;
        this.global_rating = global_rating;
        this.plot = plot;
        this.genre = genre;
        this.runtime = runtime;
        this.country = country;
        this.poster = poster;
    }

    static list() {
        return db.execute("SELECT * FROM Movie");
    }

    static random(num) {
        return db.execute('select * from Movie order by rand() limit ?', [num])
    }

    static movie_info(movieId) {
        return db.execute(
            'select * from Movie where id = ?',
            [movieId]
        );
    }

    static movie_awards(movieId) {
        return db.execute('select Award_id, awardTitle, date_awarded from AwardMovieInfo where movie_Id=?', [movieId])
    }

    static add_movie(movie) {
        console.log(movie);
        return db.execute(
            'insert into Movie (title, release_date, global_rating, plot, genre, runtime, country, poster) values (?,?,?,?,?,?,?,?)',
            [movie.title, movie.release_date, movie.global_rating, movie.plot, movie.genre, movie.runtime, movie.country, movie.poster]
        );
    }

    static update_movie(movie) {
        return db.execute(
            'update Movie set `title` = ?, `release_date` = ?,`global_rating` = ?,`plot` = ?,`genre` = ?, `runtime` = ?,`country` = ?,`poster` = ? where id = ?',
            [movie.title, movie.release_date, movie.global_rating, movie.plot, movie.genre, movie.runtime, movie.country, movie.poster, movie.id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
            });
    }
    static delete_movie(movieId) {
        return db.execute(
            'delete from MovieAward where movie_id = ?',
            [movieId]
        ).then(
            db.execute(
                'delete from MovieUser where movie_id = ?',
                [movieId]
            )).then(
                db.execute(
                    'delete from Movie where id = ?',
                    [movieId]
                )
            );
    }

}
module.exports = Movie;