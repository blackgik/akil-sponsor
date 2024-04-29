import { IRole, IRoleDocument } from '../models/role.model';
import { Role } from '../schemas/role.schema';
import { Types } from 'mongoose'

class RoleService {

    constructor() {
    }

    public async createRoleService(role: IRole): Promise<IRoleDocument> {
        try {
            if (!role.role_name)
                throw new Error(`Please enter role name`);
            if (!role.role_code)
                throw new Error(`Please enter role code`);

            const newRole: IRoleDocument = Role.buildRole(role);
            return await newRole.save();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`);
        }
    }

    public async listRolesService(): Promise<IRoleDocument[]> {
        try {
            return Role.listRoles();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }


    public async getRoleService(role_id: Types.ObjectId): Promise<IRoleDocument | null> {
        try {
            if (!role_id)
                throw new Error(`Please enter role id`);
            return Role.getRole(role_id);
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }

    public async updateRoleService(role_id: Types.ObjectId, role: IRole): Promise<IRoleDocument | null> {
        try {
            if (!role_id)
                throw new Error(`Please enter role id`);
            return Role.updateRole(role_id, role);
        } catch (err: any) {
            throw new Error(`Something went wrong -${err.message}`);
        }
    }

    public async deleteRoleService(role_id: Types.ObjectId): Promise<IRoleDocument | null> {
        try {
            if (!role_id)
                throw new Error(`Please enter role id`);
            return Role.deleteRole(role_id);
        } catch (err: any) {
            throw new Error(`Something went wrong-${err.message}`);
        }
    }

}

export default RoleService

