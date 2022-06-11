const express = require('express')
const app = express()
const port = 3000

const promiseHandler = () =>  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }

app.get('/', promiseHandler (async (req, res, next) => {
    // some db asyncrhonous operations
    // throw new Error('hello man')
    res.status(200).send('Hello World!')
}))

// Error handler for synchronous errors
// This should be the last middleware in the chain

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app 
  listening on port ${port}`)
})