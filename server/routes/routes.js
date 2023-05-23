module.exports = (app) => {
    const movieController = require('../controllers/movieController');

    app.get('/movies', movieController.findAll);
    app.get('/movies/:movieId', movieController.findOne);
    app.get('/movies/:genre', movieController.findByGenre);
    app.get('/movies/actors/:movieId', movieController.actorsByMovieId);
    app.get('/movies/directors/:movieId', movieController.directorsByMovieId);
    app.get('/movies/external/search', movieController.externalAPI);
}