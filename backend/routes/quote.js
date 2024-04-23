const { Router } = require('express');

//Controller functions
const {getQuotes, getQuote, createQuotes} = require('../controller/quoteController');
const requireAuth = require('../middleware/requireAuth');

const router = Router();

// Get one quote
router.get('/random', getQuote)

router.use(requireAuth);
//get all quotes for the username
router.get('/', getQuotes)


// create a new quote
router.post('/', createQuotes)

module.exports = router;

