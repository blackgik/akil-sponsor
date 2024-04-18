import { Document } from 'mongoose'

export default interface Sponsor extends Document {
  username: string
  firstname: string
  lastname: string
  email: string
  password: string
  phone: string
  address: string
  picture?: string
  isAdmin: boolean
}
