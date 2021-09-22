const coap = require('coap') // or coap
const req = coap.request('coap://localhost/karthik')
req.on('response', function (res) {
    res.pipe(process.stdout)
})

req.end()