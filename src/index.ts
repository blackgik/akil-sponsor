import express, { Application, Request, Response, NextFunction } from 'express'

import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'

import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './docs/apidocs';

import ErrorMiddleware from './middleware/error.middleware'
import HttpException from './utils/exceptions/http.exception'
import Controller from './interfaces/controller.interface'

import connectDb from './config/db.config'

// variable
import Variable from './env/variable.env'

// api constant
import ConstantAPI from './constants/api.constant'

// message constant
import ConstantMessage from './constants/message.constant'

// http constant
import ConstantHttpCode from './constants/http.code.constant'
import ConstantHttpReason from './constants/http.reason.constant'

class App {
  public app: Application
  private DATABASE_URL: string
  corsOptions: {
    credentials: boolean; origin: string[]|string // Whitelist the domains you want to allow
  }

  constructor(controllers: Controller[]) {
    this.app = express()
    this.DATABASE_URL = Variable.DATABASE_URL;
    // Define the CORS options
    this.corsOptions = {
      credentials: true,
      origin: '*' // Whitelist the domains you want to allow
    };

    this.initialiseDatabaseConnection(this.DATABASE_URL)
    this.initialiseConfig()
    this.initialiseRoutes()
    this.initialiseControllers(controllers)
    this.initialiseErrorHandling()
  }

  private initialiseConfig(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cookieParser())
    this.app.use(compression())
    this.app.use(cors(this.corsOptions))
    this.app.use(helmet())
    this.app.use(`${ConstantAPI.API}/documentation`, swaggerUi.serve, swaggerUi.setup(apiDocumentation));
  }

  private initialiseRoutes(): void {
    this.app.get(
      ConstantAPI.ROOT,
      (_req: Request, res: Response, next: NextFunction) => {
        try {
          return res.status(ConstantHttpCode.OK).json({
            status: {
              code: ConstantHttpCode.OK,
              msg: ConstantHttpReason.OK,
            },
            msg: ConstantMessage.API_WORKING,
          })
        } catch (err: any) {
          return next(
            new HttpException(
              ConstantHttpCode.INTERNAL_SERVER_ERROR,
              ConstantHttpReason.INTERNAL_SERVER_ERROR,
              err.message,
            ),
          )
        }
      },
    )
  }

  private initialiseControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.app.use(ConstantAPI.API, controller.router)
    })
  }

  private initialiseErrorHandling(): void {
    this.app.use(ErrorMiddleware)
  }

  private initialiseDatabaseConnection(url: string): void {
    connectDb(url)
  }
}

export default App
