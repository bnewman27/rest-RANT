const router = require('express').Router()
// GET /places
router.get('/', (req, res) => {
      res.render('places/index', { places })
  })

  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic){
      //Default image if one is not provided
      req.body.pic = "http://placekitten.com/400/400"
  }
  if (!req.body.city) {
      req.body.city = "Anytown"
  }
  if (!req.body.state) {
      req.body.state = "USA"
  }
  places.push(req.body)
  res.redirect('/places')
  })

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    placees.splice(id, 1)
    res.redirect('/places')
  }
})


  router.get('/:id/edit', (req,res) => {
    let myId = req.params.id;
    res.send(`Edit page for ${myId}`);
})

module.exports = router;