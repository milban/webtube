import express from 'express'
const app = express()

const PORT = 4000

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`)

const handleHome = (req, res) => {
  res.send('Hello from home~~~')
  console.log('user comming home')
}

app.get('/', handleHome)

app.listen(PORT, handleListening)
