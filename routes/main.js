const express = require('express')
const router = express.Router()


/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */

/*  This route render json data */
router.get('/', (req, res, next) => {
    const data = {

    }
    res.render('home', data)
})




module.exports = router
