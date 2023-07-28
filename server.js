const express = require('express')
const add = require('./sum')
var app = express()

app.get('/ping', (_, res) => res.send("pong"))
app.get('/sum', (_, res) => res.send(sum(2, 3)))

app.listen(3000)
