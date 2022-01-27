const qs = require('qs')

const server = require('./app')({ 
  logger: true,
  querystringParser: str => qs.parse(str)
})


// Run the server!
const start = async () => {
  try {
    await server.listen(process.env.PORT, '0.0.0.0')
    server.swagger()
    server.log.info(`server listening on ${server.server.address().port}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start();