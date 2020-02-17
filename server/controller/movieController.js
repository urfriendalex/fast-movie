var movie = require('../model/movie');

exports.list_all_movies = (req, res) => {
  movie.list()
    .then(([movieList, metadata]) => {
      res.json({ data: movieList });
    })
    .catch(err => {
      console.log(err);
    })
}
exports.get_movie_by_id = (req, res, next) => {
  if (req.params.movieId == "random") {
    console.log(req.query)
    movie.random(req.query.num)
      .then(([movies, metadata]) => {
        res.json({ data: movies });
      })
      .catch(err => {
        console.log(err);
      })
  }
  else {
    console.log(req.params)
    movie.movie_info(req.params.movieId)
      .then(([movies, metadata]) => {
        res.json({ data: movies });
      })
      .catch(err => {
        console.log(err);
      })
  }
}

exports.get_movie_details = async (req, res) => {
  if (req.params.movieId == "random") {
    console.log(req.query)
    res.json({ message: "Unavailable opperation" });
  }
  else {
    console.log(req.params);
    try {
      resp = {
        movieinfo: await movie.movie_info(req.params.movieId).then(([movies]) => {
          return movies;
        }),
        awards: await movie.movie_awards(req.params.movieId).then(([awards]) => {
          return awards;
        })
      }
      res.json({ data: resp })
    }
    catch (e) {
      console.log(e);
    }
  }
}

exports.get_movie_awards = (req, res, next) => {
  if (req.params.movieId == "random") {
    console.log(req.query)
    res.json({ message: "Unavailable opperation" });
  }
  else {
    console.log(req.params)
    movie.movie_awards(req.params.movieId)
      .then(([awards]) => {
        res.json({ awards: awards })
      })
      .catch(err => {
        console.log(err);
      })

  }
}

exports.add_movie = (req, res, next) => {
  console.log(req.body);
  let movieObj = {
    title: req.body.title,
    release_date: new Date(req.body.release_date),
    global_rating: Number(req.body.global_rating).toFixed(1),
    plot: req.body.plot,
    genre: req.body.genre,
    runtime: req.body.runtime,
    country: req.body.country,
    poster: req.body.poster
  }
  movie.add_movie(movieObj)
    .then(() => {
      res.json({ message: 'Movie added successfully' });
    })
    .catch(err => {
      console.log(err);
    })
}

exports.update_movie = (req, res, next) => {
  console.log(req.body);
  if (!isNaN(req.body.id) && req.body.title != "") {
    let movieObj = {
      id: req.body.id,
      title: req.body.title,
      release_date: new Date(req.body.release_date),
      global_rating: Number(req.body.global_rating).toFixed(1),
      plot: req.body.plot,
      genre: req.body.genre,
      runtime: req.body.runtime,
      country: req.body.country,
      poster: req.body.poster
    }
    movie.update_movie(movieObj)
      .then(([metadata]) => {
        res.json({ message: 'Movie information updated successfully' });
      })
      .catch(err => {
        console.log(err);
      })
  }
  else {
    res.json({ message: 'Movie information was not updated. Error occured or basic validatin conditions are not satisfied.' });
    console.log("Message sent");
  }
}

exports.delete_movie = (req, res, next) => {
  console.log(req.params);
  movie.delete_movie(req.params.movieId)
    .then(([metadata]) => {
      res.json({ message: 'Movie deleted successfully' });
    })
    .catch(err => {
      console.log(err);
    })
};

isValidUrl = () => {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

startsWithCapital = (str) => {
  return /^[A-Z]/.test(str);
}