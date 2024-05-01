#!/usr/bin/env ts-node

import 'module-alias/register'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import http from 'http'
import App from '..'

import Variable from '../env/variable.env'
import logger from '../utils/logger.util'

// controllers
import PartnerController from '../controllers/partner.controller'
import SponsorController from '../controllers/sponsor.controller'
import AuthController from '../controllers/auth.controller'
import OccupationController from '../controllers/occupation.controller'
import PaymentController from '../controllers/payment.controller'
import ProductCategoryController from '../controllers/product_category.controller'
import ProductController from '../controllers/product.controller'
import RoleController from '../controllers/role.controller'
import ProjectController from '../controllers/project.controller'
import AccountController from '../controllers/account.controller'

const { app } = new App([new PartnerController(),
new SponsorController(),
new AuthController(),
new OccupationController(),
new PaymentController(),
new ProductCategoryController(),
new ProductController(),
new RoleController(),
new ProjectController(),
new AccountController()])

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val: any) => {
  const port = parseInt(val, 10)

  if (Number.isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

const port = normalizePort(Variable.PORT || '3030')
app.set('port', port)

/**
 * Create HTTP server.
 */
const server = http.createServer(app)

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`
  logger.info(`Listening on ${bind}`)
}

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
