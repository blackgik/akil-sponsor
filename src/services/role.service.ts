import { DuplicateError } from '../utils/app.errors';
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

            const checkIfExist = await Role.findOne({ role_code: role.role_code });
            if (checkIfExist) throw new DuplicateError('Role already exists');

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


    public async getRoleService(_id: Types.ObjectId): Promise<IRoleDocument | null> {
        try {
            if (!_id)
                throw new Error(`Please enter role id`);
            return Role.getRole(_id);
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }

    public async getRoleByCodeService(role_code: string): Promise<IRoleDocument | null> {
        try {
            if (!role_code)
                throw new Error(`Please enter role code`);
            return Role.getRoleByCode(role_code);
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }

    public async updateRoleService(_id: Types.ObjectId, role: IRole): Promise<IRoleDocument | null> {
        try {
            if (!_id)
                throw new Error(`Please enter role id`);
            return Role.updateRole(_id, role);
        } catch (err: any) {
            throw new Error(`Something went wrong -${err.message}`);
        }
    }

    public async deleteRoleService(_id: Types.ObjectId): Promise<IRoleDocument | null> {
        try {
            if (!_id)
                throw new Error(`Please enter role id`);
            return Role.deleteRole(_id);
        } catch (err: any) {
            throw new Error(`Something went wrong-${err.message}`);
        }
    }

}

export default RoleService

