class Api {
  public static readonly ROOT: string = '/'

  public static readonly API: string = '/api'

  public static readonly AUTH: string = `/auth`
  public static readonly PARTNERS: string = '/partners'
  public static readonly SPONSORS: string = '/sponsors'

  // auth
  public static readonly PARTNER_AUTH_REGISTER: string = '/partner/register'
  public static readonly PARTNER_AUTH_LOGIN: string = '/partner/login'
  public static readonly SPONSOR_AUTH_REGISTER: string = '/sponsor/register'
  public static readonly SPONSOR_AUTH_LOGIN: string = '/sponsor/login'

  // partners
  public static readonly PARTNER_UPDATE_PARTNERNAME: string = '/partner/update-username/:id'
  public static readonly PARTNER_UPDATE_NAME: string = '/partner/update-name/:id'
  public static readonly PARTNER_UPDATE_EMAIL: string = '/partner/update-email/:id'
  public static readonly PARTNER_UPDATE_PASSWORD: string = '/partner/update-password/:id'
  public static readonly PARTNER_UPDATE_PHONE: string = '/partner/update-phone/:id'
  public static readonly PARTNER_UPDATE_ADDRESS: string = '/partner/update-address/:id'
  public static readonly PARTNER_DELETE: string = '/partner/delete/:id'
  public static readonly PARTNER_GET: string = '/partner/find/:id'
  public static readonly PARTNER_GET_ALL: string = '/partner'
  public static readonly PARTNER_GET_ALL_STATS: string = '/partner/stats'

  // sponsors
  public static readonly SPONSOR_UPDATE_SPONSORNAME: string = '/sponsor/update-username/:id'
  public static readonly SPONSOR_UPDATE_NAME: string = '/sponsor/update-name/:id'
  public static readonly SPONSOR_UPDATE_EMAIL: string = '/sponsor/update-email/:id'
  public static readonly SPONSOR_UPDATE_PASSWORD: string = '/sponsor/update-password/:id'
  public static readonly SPONSOR_UPDATE_PHONE: string = '/sponsor/update-phone/:id'
  public static readonly SPONSOR_UPDATE_ADDRESS: string = '/sponsor/update-address/:id'
  public static readonly SPONSOR_DELETE: string = '/sponsor/delete/:id'
  public static readonly SPONSOR_GET: string = '/sponsor/find/:id'
  public static readonly SPONSOR_GET_ALL: string = '/sponsor'
  public static readonly SPONSOR_GET_ALL_STATS: string = '/sponsor/stats'
}
export default Api
