const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.get('/edit/:id', (req, res) => {
  console.log('WE SMACKED The edit route!!')
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('edit', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {

  if (req.body.pic.length <= 0) {
    delete req.body.pic
  }

  db.Place.create(req.body)
    .then((newPic) => {
      // console.log('new Pic', newPic)
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
      }
      else {
        res.render('error404')
      }
    })
})


router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})




// router.get('/:id', (req, res) => {
//   res.send('GET /places/:id stub')
// })

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// router.delete('/:id', (req, res) => {
//   res.send('DELETE /places/:id stub')
// })



// router.post('/:id/rant', (req, res) => {
//   res.send('GET /places/:id/rant stub')
// })

// router.delete('/:id/rant/:rantId', (req, res) => {
//   res.send('GET /places/:id/rant/:rantId stub')
// })

module.exports = router
