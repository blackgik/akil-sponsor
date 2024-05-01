import { Schema, model, Types} from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { IProject,IProjectDocument, IProjectModel } from '../models/project.model';

const ProjectSchema = new Schema({
  project_business_name: {
    type: String,
    required: true,
    unique: true,
    min: ConstantNumber.USERNAME_MIN_LENGTH,
    max: ConstantNumber.USERNAME_MAX_LENGTH,
  },
  project_admin_name: {
    type: String,
    required: true,
    min: ConstantNumber.NAME_MIN_LENGTH,
    max: ConstantNumber.NAME_MAX_LENGTH,
  },
  project_slug: {
    type: String,
    required: true,
    min: ConstantNumber.NAME_MIN_LENGTH,
    max: ConstantNumber.NAME_MAX_LENGTH,
  },
  project_code: { 
    type: String, 
    trim: true, 
    required: true, 
    index: true 
  },
  project_avatar: { 
    key: { 
      type: String, 
      default: '' 
    } 
  },
  project_email: {
    type: String,
    required: true,
    unique: true,
    max: ConstantNumber.EMAIL_MAX_LENGTH,
  },
  password: {
    type: String,
    required: true,
    min: ConstantNumber.PASSWORD_MIN_LENGTH,
  },
  project_phone: {
    type: String,
    required: true,
    unique: true,
    min: ConstantNumber.PHONE_MIN_LENGTH,
    max: ConstantNumber.PHONE_MAX_LENGTH,
  },
  project_website: {
    type: String,
    required: false,
    unique: true,
    min: ConstantNumber.ADDRESS_MIN_LENGTH,
    max: ConstantNumber.ADDRESS_MIN_LENGTH,
  },
  project_address: {
    type: String,
    required: true,
    min: ConstantNumber.ADDRESS_MIN_LENGTH,
    max: ConstantNumber.ADDRESS_MAX_LENGTH,
  },
  project_sector: { 
    type: String, 
    default: '', 
    lowercase: true,
    min: ConstantNumber.ADDRESS_MIN_LENGTH,
    max: ConstantNumber.ADDRESS_MAX_LENGTH,
  },
  project_language: { 
    type: String, 
    default: 'english' 
  },
  project_location: {
    latitude: { type: String, default: '' },
    longitude: { type: String, default: '' }
  },
  on_trial: { 
    type: Boolean, 
    default: true 
  },
  hasPaid: { 
    type: Boolean, 
    default: false 
  },
  tosAgreement: { 
    type: Boolean,
    default: false
  },
  isApproved: { 
    type: Boolean, 
    default: false 
  },
  acctstatus: {
    type: String,
    trim: true,
    default: 'pending',
    index: true,
    enum: ['pending', 'active', 'suspended']
  },
  start_trial_ts: { type: Date },
  end_trial_ts: { type: Date },

},{
  collection: 'projects',
  timestamps: true,
});

ProjectSchema.statics.buildProject=(project: IProject): IProjectDocument=>{
    return new Project(project)
}

ProjectSchema.statics.listProjects=async(): Promise<IProjectDocument[]>=>{
    return await Project.find();
}
ProjectSchema.statics.getProject=async(project_id: Types.ObjectId): Promise<IProjectDocument | null>=>{
    return await Project.findById(project_id)
}

ProjectSchema.statics.updateProject=async(project_id: Types.ObjectId, project: IProject): Promise<IProjectDocument | null>=>{
    return await Project.findByIdAndUpdate(project_id, project);
}

ProjectSchema.statics.deleteProject=async(project_id: Types.ObjectId): Promise<IProjectDocument| null>=>{
    return await Project.findByIdAndDelete(project_id);
}

const Project = model<IProjectDocument, IProjectModel>('projects',ProjectSchema);


export {
    Project
}
