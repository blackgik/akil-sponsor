import { Schema, model, Types } from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { IProject, IProjectDocument, IProjectModel } from '../models/project.model';

const ProjectSchema = new Schema({
  project_name: {
    type: String,
    required: true,
  },
  project_code: {
    type: String,
    trim: true,
    required: true,
    index: true
  },
  quantity_per_pers: {
    type: Number,
    required: true,
  },
  project_description: {
    type: String,
    required: true,
  },
  project_product_type: {
    type: Types.ObjectId,
    ref: "product_categories",
    required: true
  },
  project_beneficiaries: [
    {
      type: Types.ObjectId,
      ref: "beneficiaries"
    }
  ],
  project_product_item: {
    type: Types.ObjectId,
    ref: "products",
    required: true
  },
  project_sponsor: {
    type: Types.ObjectId,
    ref: "sponsors",
    required: true
  },
  prjstatus: {
    type: String,
    trim: true,
    default: 'pending',
    index: true,
    enum: ['pending', 'active', 'suspended']
  },
  project_start_date: { type: Date },
  project_end_date: { type: Date },

}, {
  collection: 'projects',
  timestamps: true,
});

ProjectSchema.statics.buildProject = (project: IProject): IProjectDocument => {
  return new Project(project)
}

ProjectSchema.statics.listProjects = async (): Promise<IProjectDocument[]> => {
  return await Project.find();
}
ProjectSchema.statics.getProject = async (project_id: Types.ObjectId): Promise<IProjectDocument | null> => {
  return await Project.findById(project_id)
}

ProjectSchema.statics.updateProject = async (project_id: Types.ObjectId, project: IProject): Promise<IProjectDocument | null> => {
  return await Project.findByIdAndUpdate(project_id, project);
}

ProjectSchema.statics.deleteProject = async (project_id: Types.ObjectId): Promise<IProjectDocument | null> => {
  return await Project.findByIdAndDelete(project_id);
}

const Project = model<IProjectDocument, IProjectModel>('projects', ProjectSchema);


export {
  Project
}
