const express = require('express')
const app = express()
const port = 3000

app.get('/parks/:city', (req, res) => {
  if(req.params.city === 'tunja'){
    res.send('Parque pinzon, parque recreacional') 
  }
  res.send('No hay registros')
})

{ city: 'tunja' }

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})