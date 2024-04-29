import { Document, Model, Types} from 'mongoose'

export interface IRole{
    role_name: string,
    role_code: string,
    role_slug?: string,
    role_description?: string
    is_active: boolean
}

export interface IRoleDocument extends IRole, Document{}

export interface IRoleModel extends Model<IRoleDocument>{
    buildRole(role: IRole):IRoleDocument
    listRoles():Promise<IRoleDocument[]>
    getRole(role_id: Types.ObjectId):Promise<IRoleDocument | null>
    updateRole(role_id: Types.ObjectId, role: IRole):Promise<IRoleDocument>
    deleteRole(role_id: Types.ObjectId):Promise<IRoleDocument | null>
}

