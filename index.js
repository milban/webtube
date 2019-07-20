import express from 'express'
import logger from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
const app = express()

const PORT = 4000

const handleHome = (req, res) => {
  res.send('Hello from home~~~')
  console.log('user comming home')
}

const handleProfile = (req, res) => {
  res.send('in profile')
}
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(logger('dev'))

app.get('/', handleHome)
app.get('/profile', handleProfile)

app.listen(PORT, handleListening)

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`)
