import { Document } from 'mongoose'

export default interface Role extends Document {
    role_name: string
    role_slug?: string
    role_description: string
    is_active: boolean
}
