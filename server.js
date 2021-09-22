const coap = require('coap') // or coap
const server = coap.createServer()

server.on('request', function (req, res) {
    console.log('Server Received ' + req.payload.length + ' bytes')
    console.log(req.payload.toString('utf-8'))
    //console.log(req.payload.slice(-containedData.length).toString('utf-8'))

    res.end('Hello ' + req.url.split('/')[1] + '\n')
})

server.listen(function () {
    console.log('server started')
})