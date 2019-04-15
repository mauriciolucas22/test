const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  return res.send('JESUS LOVES YOU!!')
})

app.listen(3000)