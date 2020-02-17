var awardsMovies = require('../model/awardsMovies');

exports.list_all_awards_movies = (req, res, next) => {
    awardsMovies.list()
  .then( ([awards_movies_list, metadata]) => {
    res.json({data: awards_movies_list});
  })
  .catch(err => {
    console.log(err);
  })}

  exports.add_awards_movies = (req, res, next) => {
    let awardsMoviesObj = {
        Award_Id: req.body.Award_Id,
        Movie_id: req.body.Movie_Id,
        release_date: new Date(req.body.date_awarded),
    }
    console.log(awardsMoviesObj);
    awardsMovies.add_awards_movies(awardsMoviesObj)
    .then( ([metadata]) => {
      res.json({message: 'Record added successfully'});
    })
    .catch(err => {
      console.log(err);
    })}