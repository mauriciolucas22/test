const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  return res.send('ok')
})

app.listen(3000)