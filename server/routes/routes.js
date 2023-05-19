module.exports = (app) => {
    const movieController = require('../controllers/movieController');
    const userAuthentication = require('../controllers/userAuthentication');

    app.get('/movies', movieController.findAll);
    app.get('/movies/:movieId', movieController.findOne);
    app.get('/movies/:genre', movieController.findByGenre);
    app.get('/movies/year', movieController.findByYear);
    app.get('/movies/external/search', movieController.externalAPI);
    app.get('/user/credentials', userAuthentication.authenticate);
}