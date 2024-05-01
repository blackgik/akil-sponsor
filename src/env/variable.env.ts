import 'dotenv/config'

import VariableValidate from '../validations/variable.validation'

class Variable {
  public static readonly NODE_ENV: string = process.env.NODE_ENV!

  public static readonly PORT: number = Number(process.env.PORT)!

  public static readonly DATABASE_URL: string = process.env.DATABASE_URL!
  public static readonly BASE_LOCAL_URL: string = process.env.BASE_LOCAL_URL!
  public static readonly BASE_PROD_URL: string = process.env.BASE_PROD_URL!

  public static readonly JWT_SECRET: string = process.env.JWT_SECRET!

  public static readonly PASS_SECRET: string = process.env.PASS_SECRET!

  public static readonly PAYSTACK_BASE_URL: string = process.env.PAYSTACK_BASE_URL!

  public static readonly PAYSTACK_SECRET_KEY: string = process.env.PAYSTACK_SECRET_KEY!

  public static readonly ACCESS_TOKEN_PRIVATE_KEY: string = process.env.ACCESS_TOKEN_PRIVATE_KEY!

  public static readonly ACCESS_TOKEN_PUBLIC_KEY: string = process.env.ACCESS_TOKEN_PUBLIC_KEY!

  public static readonly REFRESH_TOKEN_PRIVATE_KEY: string = process.env.REFRESH_TOKEN_PRIVATE_KEY!

  public static readonly REFRESH_TOKEN_PUBLIC_KEY: string = process.env.REFRESH_TOKEN_PUBLIC_KEY!

  public static readonly COOKIE_DOMAIN: string = process.env.COOKIE_DOMAIN!

  public static readonly REDIS_URL: string = process.env.REDIS_URL!

  public static readonly SENDGRID_API_KEY: string = process.env.SENDGRID_API_KEY!

  public static readonly EMAIL_SENDER: string = process.env.EMAIL_SENDER!
  

  constructor() {
    this.initialise()
  }

  private initialise(): void {
    VariableValidate()
  }
}

export default Variable
