import { Schema, model, Types} from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { IRole,IRoleDocument, IRoleModel } from '../models/role.model';

const RoleSchema = new Schema({
    role_name:{
        type: String,
        required: true
    },
    role_code:{
        type: String,
        required: true
    },
    role_slug:{
        type: String,
        required: false
    },
    role_description:{
        type: String,
        required: false
    },
    is_active:{
        type: Boolean,
        default: true,
        required: false
    }
    
},{
    collection: 'roles',
    timestamps: true,
  });

RoleSchema.statics.buildRole=(role: IRole): IRoleDocument=>{
    return new Role(role)
}

RoleSchema.statics.listRoles=async(): Promise<IRoleDocument[]>=>{
    return await Role.find();
}
RoleSchema.statics.getRole=async(role_id: Types.ObjectId): Promise<IRoleDocument | null>=>{
    return await Role.findById(role_id)
}

RoleSchema.statics.updateRole=async(role_id: Types.ObjectId, role: IRole): Promise<IRoleDocument | null>=>{
    return await Role.findByIdAndUpdate(role_id, role);
}

RoleSchema.statics.deleteRole=async(role_id: Types.ObjectId): Promise<IRoleDocument| null>=>{
    return await Role.findByIdAndDelete(role_id);
}

const Role = model<IRoleDocument, IRoleModel>('roles',RoleSchema);

export {
    Role
}