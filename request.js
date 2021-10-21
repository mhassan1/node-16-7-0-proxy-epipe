const http = require('http')
;(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  for (let i = 0; i < 1e4; i++) {
    const result = await new Promise((resolve, reject) => {
      http.request({
        method: 'POST',
        port: 8080
      }, (resp) => {
        resp.statusCode === 200 ? resolve('ok') : reject(new Error(resp.statusCode))
      }).end('{}')
    })
    console.log(i, result)
  }
  console.log('done')
})()
