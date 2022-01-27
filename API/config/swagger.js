exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Yapo TL API',
      description: 'API REST Para yapo, para el examen tecnico para el rol de TL',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: `localhost:${process.env.PORT}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}