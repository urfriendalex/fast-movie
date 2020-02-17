
module.exports = function(app) {
    var movieController = require('../controller/movieController.js');
    var userController = require('../controller/userController.js');
    var awardController = require('../controller/awardController.js');
    var awardsMoviesController = require('../controller/awardsMoviesController.js')
  
    app.get('/', (req, res) => {
        res.send('hey there, wanna some data?')
    });

    app.route('/awardsmovies')
    .get(awardsMoviesController.list_all_awards_movies)
    .post(awardsMoviesController.add_awards_movies)

    app.route('/awards')
    .get(awardController.list_all_awards)

    app.route('/movies/:movieId/awards')
    .get(movieController.get_movie_awards)

    app.route('/users')
      .get(userController.list_all_users)

    app.route('/movies')
      .get(movieController.list_all_movies)
      .post(movieController.add_movie);
     
     app.route('/movies/:movieId')
      .get(movieController.get_movie_by_id)
      .patch(movieController.update_movie)
      .delete(movieController.delete_movie);
    
      app.route('/movies/:movieId/details')
        .get(movieController.get_movie_details)
      

    };
