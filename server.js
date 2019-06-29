require('dotenv').config()
const express     = require('express')
const mongoose    = require('mongoose')
const application = express()
const port        = 3000
const root        = '/'

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const database = mongoose.connection
database.on('error', (error) => console.error(error))
database.once('open', () => console.log('Connected to Database'))

application.use(express.json())

const subscribersRoutersRouter = require('./routes/subscribers')
application.use(root + 'subscribers', subscribersRoutersRouter)

application.listen(port, () => console.log(`server started on ${port}`))
