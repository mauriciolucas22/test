const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  return res.send('JESUS LOVES YOU!! and GOD too')
})

app.get('/test', (req, res) => {
  return res.send('oi')
})

app.listen(3000)