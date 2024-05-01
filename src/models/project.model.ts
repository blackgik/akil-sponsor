import { Document, Model, Types} from 'mongoose'

export interface IProject{
    project_business_name: string,
    project_admin_name: string,
    project_code: string,
    project_slug: string,
    project_language: string,
    project_sector: string,
    project_phone: string,
    project_avatar?: string
    project_email?: string,
    project_website?: string,
    project_location?: {
      latitude: string,
      longitude: string,
    },
    project_address?: string,
    isApproved: boolean,
    tosAgreement: boolean,
    acctstatus: string,    
    on_trial: Boolean,
    start_trial_ts: Date,
    end_trial_ts: Date,
    hasPaid: Boolean
}

export interface IProjectDocument extends IProject, Document{}

export interface IProjectModel extends Model<IProjectDocument>{
    buildProject(project: IProject):IProjectDocument
    listProjects():Promise<IProjectDocument[]>
    getProject(project_id: Types.ObjectId):Promise<IProjectDocument | null>
    updateProject(project_id: Types.ObjectId, project: IProject):Promise<IProjectDocument>
    deleteProject(project_id: Types.ObjectId):Promise<IProjectDocument | null>
}
