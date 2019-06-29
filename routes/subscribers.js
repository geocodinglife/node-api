const express = require('express')
const router  = express.Router()
const Subscriber = require('../models/subscriber')
const root = '/'

// Getting all
router.get(root, async (request, respond) => {
  try {
   const subscribers = await Subscriber.find()
   respond.json(subscribers)
 } catch (error) {
   respond.status(500).json({ message: error.message })
  }
})

// Getting One
router.get('/:id', getSubscriber, (request, respond) => {
  respond.json(respond.subscriber)
})

// Creating One
router.post('/', async (request, respond) => {
  const subscriber = new Subscriber({
    name: request.body.name,
    subscribedToChannel: request.body.subscribedToChannel
  })
  try {
   const newSubscriber = await subscriber.save()
   respond.status(201).json(newSubscriber)
  } catch (error) {
    respond.status(400).json({ message: error.message })
  }
})

// Updating One
router.patch('/:id', getSubscriber, async (request, respond) => {
  if (request.body.name != null) {
  respond.subscriber.name = request.body.name
  }
  if (request.body.subscribedToChannel != null) {
  respond.subscriber.subscribedToChannel = request.body.subscribedToChannel
  }
  try {
   const updatedSubscriber = await respond.subscriber.save()
   respond.json(updatedSubscriber)
  } catch (error) {
    respond.status(400).json({ message: error.message })
  }
})

// Deleting One
router.delete('/:id', getSubscriber, async (request, respond) => {
  try {
   await respond.subscriber.remove()
   respond.json({ message: 'Deleting  Subscribers' })
  } catch (error) {
   respond.status(500).json({ message: error.message })
  }
  // res.subscriber
})

async function getSubscriber(request, respond, next) {
  try{
   subscriber = await Subscriber.findById(request.params.id)
   if (subscriber == null)
   return respond.status(404).json({ message: "Cant find subscriber"})
  } catch (error) {
    return respond.status(500).json({ message: error.message })
  }
  respond.subscriber = subscriber
  next()
}

module.exports = router
