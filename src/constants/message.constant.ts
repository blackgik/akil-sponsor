class Message {
  public static readonly API_WORKING: string = 'API is working'

  public static readonly SOMETHING_WENT_WRONG: string = 'Something went wrong'

  // auth
  public static readonly USERNAME_NOT_VALID: string = 'username is not valid'
  public static readonly NAME_NOT_VALID: string = 'name is not valid'
  public static readonly EMAIL_NOT_VALID: string = 'email is not valid'
  public static readonly PASSWORD_NOT_VALID: string = 'password is not valid'
  public static readonly PHONE_NOT_VALID: string = 'phone is not valid'
  public static readonly ADDRESS_NOT_VALID: string = 'address is not valid'
  public static readonly USERNAME_EXIST: string = 'username is exist'
  public static readonly EMAIL_EXIST: string = 'email is exist'
  public static readonly PHONE_EXIST: string = 'phone is exist'
  public static readonly USER_NOT_CREATE: string =
    'user is not create, please try again'
  public static readonly USER_CREATE_SUCCESS: string ='user is create success, please login'
  public static readonly USER_NOT_FOUND: string = 'user is not found'
  public static readonly PASSWORD_NOT_MATCH: string = 'password is not match'
  public static readonly USER_LOGIN_SUCCESS: string = 'user is login success'
  // token
  public static readonly TOKEN_NOT_VALID: string = 'Token not valid'
  public static readonly NOT_AUTHENTICATED: string = 'Not authenticated'
  public static readonly UNAUTHORIZED: string = 'Unauthorized'
  public static readonly NOT_ALLOWED: string = 'Not allowed'

  // user
  public static readonly USERNAME_NOT_CHANGE: string = 'username is not change'
  public static readonly USERNAME_CHANGE_SUCCESS: string =
    'username is change success'
  public static readonly NAME_NOT_CHANGE: string = 'name is not change'
  public static readonly NAME_CHANGE_SUCCESS: string = 'name is change success'
  public static readonly EMAIL_NOT_CHANGE: string = 'email is not change'
  public static readonly EMAIL_CHANGE_SUCCESS: string =
    'email is change success'
  public static readonly PASSWORD_NOT_CHANGE: string = 'password is not change'
  public static readonly PASSWORD_CHANGE_SUCCESS: string =
    'password is change success'
  public static readonly PHONE_NOT_CHANGE: string = 'phone is not change'
  public static readonly PHONE_CHANGE_SUCCESS: string =
    'phone is change success'
  public static readonly ADDRESS_NOT_CHANGE: string = 'address is not change'
  public static readonly ADDRESS_CHANGE_SUCCESS: string =
    'address is change success'
  public static readonly USER_NOT_DELETE: string =
    'user is not delete, please try again'
  public static readonly USER_DELETE_SUCCESS: string = 'user is delete success'
  public static readonly USER_FOUND: string = 'user is found'

  //Product and categories

  public static readonly PRODUCT_NOT_UPDATED: string = 'Product not updated'
  public static readonly PRODUCT_UPDATE_SUCCESS: string ='Product updated successfully'
  public static readonly CATEGORY_NOT_UPDATED: string = 'Category not updated'
  public static readonly CATEGORY_UPDATE_SUCCESS: string = 'Category updated successfully'
  public static readonly PRODUCT_NOT_DELETED: string =    'Product not deleted, please try again'
  public static readonly CATEGORY_NOT_DELETED: string =    'Category not deleted, please try again'
  public static readonly PRODUCT_DELETE_SUCCESS: string = 'Product deleted successfully'
  public static readonly CATEGORY_DELETE_SUCCESS: string = 'Category deleted successfully'
  public static readonly PRODUCT_FOUND: string = 'Product found'
  public static readonly CATEGORY_FOUND: string = 'Category  found'
  public static readonly CATEGORY_CREATE_SUCCESS: string ='Category created successfully'
  public static readonly PRODUCT_CREATE_SUCCESS: string ='Product created successfully'

  //Occupation
  public static readonly OCCUPATION_NOT_UPDATED: string = 'Occupation not updated'
  public static readonly OCCUPATION_UPDATE_SUCCESS: string ='Occupation updated successfully'
  public static readonly OCCUPATION_NOT_DELETED: string =    'Occupation not deleted, please try again'
  public static readonly OCCUPATION_DELETE_SUCCESS: string = 'Occupation deleted successfully'
  public static readonly OCCUPATION_FOUND: string = 'Occupation found'
  public static readonly OCCUPATION_CREATE_SUCCESS: string ='Occupation created successfully'

  //Role
  public static readonly ROLE_NOT_UPDATED: string = 'Role not updated'
  public static readonly ROLE_UPDATE_SUCCESS: string ='Role updated successfully'
  public static readonly ROLE_NOT_DELETED: string =    'Role not deleted, please try again'
  public static readonly ROLE_DELETE_SUCCESS: string = 'Role deleted successfully'
  public static readonly ROLE_FOUND: string = 'Role found'
  public static readonly ROLE_CREATE_SUCCESS: string ='Role created successfully'

  //Partner
  public static readonly PARTNER_NOT_UPDATED: string = 'Partner not updated'
  public static readonly PARTNER_UPDATE_SUCCESS: string ='Partner updated successfully'
  public static readonly PARTNER_NOT_DELETED: string =    'Partner not deleted, please try again'
  public static readonly PARTNER_DELETE_SUCCESS: string = 'Partner deleted successfully'
  public static readonly PARTNER_FOUND: string = 'Partner found'
  public static readonly PARTNER_CREATE_SUCCESS: string ='Partner created successfully'

  //Sponsor
  public static readonly SPONSOR_NOT_UPDATED: string = 'Sponsor not updated'
  public static readonly SPONSOR_UPDATE_SUCCESS: string ='Sponsor updated successfully'
  public static readonly SPONSOR_NOT_DELETED: string =    'Sponsor not deleted, please try again'
  public static readonly SPONSOR_DELETE_SUCCESS: string = 'Sponsor deleted successfully'
  public static readonly SPONSOR_FOUND: string = 'Sponsor found'
  public static readonly SPONSOR_CREATE_SUCCESS: string ='Sponsor created successfully'
}
export default Message
