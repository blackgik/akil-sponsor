const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'AKILAAH partners and sponsors REST API - Documentation',
    description:
      'Management of partners and sponsors from onboarding to product subscription',
    termsOfService: 'https://akilaah.com/terms',
    contact: {
      name: 'Honoré OUEDRAOGO',
      email: 'dev@honoreouedraogo.net',
      url: 'https://honoreouedraogo.net',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:4500/',
      description: 'Local Server',
    },
    {
      url: 'https://api.akilaah.com',
      description: 'Production Server',
    },
  ],
  tags: [],
  paths: {},
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {},
  },
}

export { apiDocumentation }
