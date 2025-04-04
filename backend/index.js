const express = require('express')
const app = express()
const PORT = 5000

app.use(express.json())

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from shared backend!' })
})

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})
