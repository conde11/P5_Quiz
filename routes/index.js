const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Quiz' });
});

//Credits page.
router.get('/credits', function(req, res, next) {
    res.render('credits');
});

//List of quizzes
router.get('/quizzes', quizController.index);

    module.exports = router;