const router = require('express').Router()

//GET PLACES
router.get('/', (req, res) => {
    res.render('places/index')
})

module.exports = router
