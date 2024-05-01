import { Document, Types } from 'mongoose'

export default interface User extends Document {
  username: string
  firstname: string
  lastname: string
  email: string
  user_role_id: Types.ObjectId,
  user_sponsor_id: Types.ObjectId,
  user_partner_id: Types.ObjectId,
  phone: string
  address: string
  picture?: string
  isAdmin: boolean
  is_active: boolean
}
