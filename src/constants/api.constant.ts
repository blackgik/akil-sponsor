class Api {
  public static readonly ROOT: string = '/'

  public static readonly API: string = '/api'

  public static readonly AUTH: string = `/auth`
  public static readonly PARTNERS: string = '/partners'
  public static readonly OCCUPATIONS: string = '/occupations'
  public static readonly SPONSORS: string = '/sponsors'

  // partner-uth
  public static readonly PARTNER_AUTH_REGISTER: string = '/partner/register'
  public static readonly PARTNER_AUTH_LOGIN: string = '/partner/login'
  public static readonly PARTNER_AUTH_FORGOT: string = '/partner/forgot'
  public static readonly PARTNER_AUTH_RESET: string = '/partner/reset'
  // sponsor-auth
  public static readonly SPONSOR_AUTH_REGISTER: string = '/sponsor/register'
  public static readonly SPONSOR_AUTH_LOGIN: string = '/sponsor/login'
  public static readonly SPONSOR_AUTH_FORGOT: string = '/sponsor/forgot'
  public static readonly SPONSOR_AUTH_RESET: string = '/sponsor/reset'
  // user-auth
  public static readonly USER_AUTH_REGISTER: string = '/user/register'
  public static readonly USER_AUTH_LOGIN: string = '/user/login'
  public static readonly USER_AUTH_FORGOT: string = '/user/forgot'
  public static readonly USER_AUTH_RESET: string = '/user/reset'

  // partners
  public static readonly PARTNER_UPDATE_USERNAME: string = '/partner/update-username/:id'
  public static readonly PARTNER_UPDATE_EMAIL: string = '/partner/update-email/:id'
  public static readonly PARTNER_UPDATE_PASSWORD: string = '/partner/update-password/:id'
  public static readonly PARTNER_UPDATE_PHONE: string = '/partner/update-phone/:id'
  public static readonly PARTNER_DELETE: string = '/partner/delete/:id'
  public static readonly PARTNER_GET: string = '/partner/find/:id'
  public static readonly PARTNER_GET_ALL: string = '/partner'
  public static readonly PARTNER_GET_ALL_STATS: string = '/partner/stats'

  // sponsors
  public static readonly SPONSOR_UPDATE_USERNAME: string = '/sponsor/update-username/:id'
  public static readonly SPONSOR_UPDATE_EMAIL: string = '/sponsor/update-email/:id'
  public static readonly SPONSOR_UPDATE_PASSWORD: string = '/sponsor/update-password/:id'
  public static readonly SPONSOR_UPDATE_PHONE: string = '/sponsor/update-phone/:id'
  public static readonly SPONSOR_DELETE: string = '/sponsor/delete/:id'
  public static readonly SPONSOR_GET: string = '/sponsor/find/:id'
  public static readonly SPONSOR_GET_ALL: string = '/sponsor'
  public static readonly SPONSOR_GET_ALL_STATS: string = '/sponsor/stats'

  // categories
  public static readonly CATEGORY_UPDATE: string = '/category/:id'
  public static readonly CATEGORY_CREATE: string = '/category'
  public static readonly CATEGORY_DELETE: string = '/category/delete/:id'
  public static readonly CATEGORY_GET: string = '/category/find/:id'
  public static readonly CATEGORY_GET_ALL: string = '/categories'
  public static readonly CATEGORY_GET_ALL_STATS: string = '/category/stats'

    // categories
    public static readonly OCCUPATION_UPDATE: string = '/occupation/:id'
    public static readonly OCCUPATION_CREATE: string = '/occupation'
    public static readonly OCCUPATION_DELETE: string = '/occupation/delete/:id'
    public static readonly OCCUPATION_GET: string = '/occupation/find/:id'
    public static readonly OCCUPATION_GET_ALL: string = '/occupations'
    public static readonly OCCUPATION_GET_ALL_STATS: string = '/occupation/stats'

  // products
  public static readonly PRODUCT_UPDATE: string = '/product/:id'
  public static readonly PRODUCT_CREATE: string = '/product'
  public static readonly PRODUCT_DELETE: string = '/product/delete/:id'
  public static readonly PRODUCT_GET: string = '/product/find/:id'
  public static readonly PRODUCT_GET_ALL: string = '/products'
  public static readonly PRODUCT_GET_BY_CATEGORY: string = '/products/category/:id'
  public static readonly PRODUCT_GET_BY_PARTNER: string = '/products/partner/:id'
  public static readonly PRODUCT_GET_ALL_STATS: string = '/product/stats'

  // users
  public static readonly USER_UPDATE: string = '/user/:id'
  public static readonly USER_CREATE: string = '/user'
  public static readonly USER_DELETE: string = '/user/delete/:id'
  public static readonly USER_GET: string = '/user/find/:id'
  public static readonly USER_GET_ALL: string = '/users'
  public static readonly USER_GET_BY_ROLE: string = '/users/role/:id'
  public static readonly USER_GET_BY_PARTNER: string = '/users/partner/:id'
  public static readonly USER_GET_BY_SPONSOR: string = '/users/sponsor/:id'
  public static readonly USER_GET_ALL_STATS: string = '/user/stats'

  // roles
  public static readonly ROLE_UPDATE: string = '/role/:id'
  public static readonly ROLE_CREATE: string = '/role'
  public static readonly ROLE_DELETE: string = '/role/delete/:id'
  public static readonly ROLE_GET: string = '/role/find/:id'
  public static readonly ROLE_GET_ALL: string = '/roles'
  public static readonly ROLE_GET_ALL_STATS: string = '/role/stats'
}
export default Api
