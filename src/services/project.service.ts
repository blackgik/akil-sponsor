import { IProject,IProjectDocument } from '../models/project.model';
import { Project} from '../schemas/project.schema';
import { Types } from 'mongoose'

class ProjectService {

    constructor() {
    }

    public async createProjectService(project: IProject): Promise<IProjectDocument> {
        try {
            if (!project.project_business_name)
                throw new Error(`Please enter project name`);
            if (!project.project_code)
                throw new Error(`Please enter project code`);

            const newProject: IProjectDocument = Project.buildProject(project);
            return await newProject.save();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`);
        }
    }

    public async listProjectsService(): Promise<IProjectDocument[]> {
        try {
            return Project.listProjects();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }


    public async getProjectService(project_id: Types.ObjectId): Promise<IProjectDocument | null> {
        try {
            if (!project_id)
                throw new Error(`Please enter project id`);
            return Project.getProject(project_id);
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }

    public async updateProjectService(project_id: Types.ObjectId, project: IProject): Promise<IProjectDocument | null> {
        try {
            if (!project_id)
                throw new Error(`Please enter project id`);
            return Project.updateProject(project_id, project);
        } catch (err: any) {
            throw new Error(`Something went wrong -${err.message}`);
        }
    }

    public async deleteProjectService(project_id: Types.ObjectId): Promise<IProjectDocument | null> {
        try {
            if (!project_id)
                throw new Error(`Please enter project id`);
            return Project.deleteProject(project_id);
        } catch (err: any) {
            throw new Error(`Something went wrong-${err.message}`);
        }
    }

}

export default ProjectService

