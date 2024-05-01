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
RoleSchema.statics.getRole=async(_id: Types.ObjectId): Promise<IRoleDocument | null>=>{
    return await Role.findById(_id)
}

RoleSchema.statics.getRoleByCode=async(role_code: string): Promise<IRoleDocument | null>=>{
    return await Role.findOne({where: {
        role_code: role_code
    }})
}

RoleSchema.statics.updateRole=async(_id: Types.ObjectId, role: IRole): Promise<IRoleDocument | null>=>{
    return await Role.findByIdAndUpdate(_id, role);
}

RoleSchema.statics.deleteRole=async(_id: Types.ObjectId): Promise<IRoleDocument| null>=>{
    return await Role.findByIdAndDelete(_id);
}

const Role = model<IRoleDocument, IRoleModel>('roles',RoleSchema);

export {
    Role
}