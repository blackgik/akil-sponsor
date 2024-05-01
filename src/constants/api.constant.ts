class Api {
  public static readonly ROOT: string = '/'

  public static readonly API: string = '/api/v1/sponsors/stag'

  public static readonly AUTH: string = `/auth`
  public static readonly PARTNERS: string = '/partners'
  public static readonly OCCUPATIONS: string = '/occupations'
  public static readonly SPONSORS: string = '/sponsors'
  public static readonly PAYMENTS: string = '/payments'
  public static readonly ROLES: string = '/roles'
  public static readonly USERS: string = '/users'
  public static readonly PRODUCTS: string = '/products'

  // partner-uth
  public static readonly PARTNER_AUTH_ONBOARDING: string = '/onboarding'
  public static readonly PARTNER_AUTH_LOGIN: string = '/login'
  public static readonly PARTNER_AUTH_FORGOT: string = '/forgot'
  public static readonly PARTNER_AUTH_RESET: string = '/reset'
  // sponsor-auth
  public static readonly SPONSOR_AUTH_ONBOARDING: string = '/onboarding'
  public static readonly SPONSOR_AUTH_LOGIN: string = '/login'
  public static readonly SPONSOR_AUTH_FORGOT: string = '/forgot'
  public static readonly SPONSOR_AUTH_RESET: string = '/reset'
  // user-auth
  public static readonly USER_AUTH_ONBOARDING: string = '/register'
  public static readonly USER_AUTH_LOGIN: string = '/login'
  public static readonly USER_AUTH_FORGOT: string = '/forgot'
  public static readonly USER_AUTH_RESET: string = '/reset'

  // partners
  public static readonly PARTNER_UPDATE: string = '/:partner_id'
  public static readonly PARTNER_CREATE: string = ''
  public static readonly PARTNER_DELETE: string = '/delete/:partner_id'
  public static readonly PARTNER_GET: string = '/find/:partner_id'
  public static readonly PARTNER_GET_ALL: string = ''
  public static readonly PARTNER_GET_ALL_STATS: string = '/stats'

  // partners
  public static readonly SPONSOR_UPDATE: string = '/:sponsor_id'
  public static readonly SPONSOR_CREATE: string = ''
  public static readonly SPONSOR_DELETE: string = '/delete/:sponsor_id'
  public static readonly SPONSOR_GET: string = '/find/:sponsor_id'
  public static readonly SPONSOR_GET_ALL: string = ''
  public static readonly SPONSOR_GET_ALL_STATS: string = '/stats'


  // categories
  public static readonly CATEGORY_UPDATE: string = '/:product_category_id'
  public static readonly CATEGORY_CREATE: string = ''
  public static readonly CATEGORY_DELETE: string = '/delete/:product_category_id'
  public static readonly CATEGORY_GET: string = '/find/:product_category_id'
  public static readonly CATEGORY_GET_ALL: string = ''
  public static readonly CATEGORY_GET_ALL_STATS: string = '/stats'

  // categories
  public static readonly OCCUPATION_UPDATE: string = '/:occupation_id'
  public static readonly OCCUPATION_CREATE: string = ''
  public static readonly OCCUPATION_DELETE: string = '/delete/:occupation_id'
  public static readonly OCCUPATION_GET: string = '/find/:occupation_id'
  public static readonly OCCUPATION_GET_ALL: string = ''
  public static readonly OCCUPATION_GET_ALL_STATS: string = '/stats'

  // products
  public static readonly PRODUCT_UPDATE: string = '/:product_id'
  public static readonly PRODUCT_CREATE: string = ''
  public static readonly PRODUCT_DELETE: string = '/delete/:product_id'
  public static readonly PRODUCT_GET: string = '/find/:product_id'
  public static readonly PRODUCT_GET_ALL: string = ''
  public static readonly PRODUCT_GET_BY_CATEGORY: string = '/category/:category_id'
  public static readonly PRODUCT_GET_BY_PARTNER: string = '/sponsor/:sponsor_id'
  public static readonly PRODUCT_GET_ALL_STATS: string = '/stats'

  // users
  public static readonly USER_UPDATE: string = '/:user_id'
  public static readonly USER_CREATE: string = ''
  public static readonly USER_DELETE: string = '/delete/:user_id'
  public static readonly USER_GET: string = '/find/:user_id'
  public static readonly USER_GET_ALL: string = ''
  public static readonly USER_GET_BY_ROLE: string = '/role/:role_id'
  public static readonly USER_GET_BY_SPONSOR: string = '/sponsor/:sponsor_id'
  public static readonly USER_GET_ALL_STATS: string = '/stats'

  // PAYSTACK PAYMENT
  public static readonly PAYMENT_INIT: string = '/paystack-init'
  public static readonly PAYMENT_VERIFY: string = '/paystack-verify'
  public static readonly PAYSTACK_BANK_LIST: string = '/paystack-bank-list'
  public static readonly PAYSTACK_ACCOUNT_INQUIRY: string = '/paystack-acct-inquiry'

  // roles
  public static readonly ROLE_UPDATE: string = '/:role_id'
  public static readonly ROLE_CREATE: string = ''
  public static readonly ROLE_DELETE: string = '/delete/:role_id'
  public static readonly ROLE_GET: string = '/find/:role_id'
  public static readonly ROLE_GET_ALL: string = ''
  public static readonly ROLE_GET_ALL_STATS: string = '/stats'
}
export default Api
