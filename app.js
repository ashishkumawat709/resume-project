const express = require('express')
const app = express()
const web = require('./routes/web')

app.set('view engine' , 'ejs')
app.use('/', web)
app.use(express.static('public'))
app.listen(3000)