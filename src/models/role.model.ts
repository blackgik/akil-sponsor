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
    getRole(_id: Types.ObjectId):Promise<IRoleDocument | null>
    getRoleByCode(role_code: string):Promise<IRoleDocument | null>
    updateRole(_id: Types.ObjectId, role: IRole):Promise<IRoleDocument>
    deleteRole(_id: Types.ObjectId):Promise<IRoleDocument | null>
}

