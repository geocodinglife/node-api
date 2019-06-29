const express = require('express')
const router  = express.Router()
const Subscriber = require('../models/subscriber')

const root = '/'
// Getting all
router.get(root,async (request, respond) => {
  try {
   const subscribers = await Subscriber.find()
   respond.json(subscribers)
 } catch (error) {
   respond.status(500).json({ message: error.message })
  }
})
// Getting One
router.get((root + ':id'), (request, respond) => {
  respond.send(request.params.id)
})
// Creating One
router.post(root, (request, respond) => {

})
// Updating One
router.patch(root, (request, respond) => {

})
// Deleting One
// route.delete('/:id', (request, respond) => {

// })

module.exports = router
