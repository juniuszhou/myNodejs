const express = require('express')
const proxy = require('http-proxy-middleware')

/*const options = {
    target: "http://localhost:8080",
    changeOrigin:true,
}

const apiProxy = proxy(options)*/

const app = express()

app.use(express.static(__dirname))
//app.use('/', apiProxy)
app.listen(80)

