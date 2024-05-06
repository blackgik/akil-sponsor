import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import ProjectService from '../services/project.service'
import Validate from '../validations/project.validation'

import Authenticated from '../middleware/authenticated.middleware'
import validationMiddleware from '../middleware/validation.middleware'

import HttpException from '../utils/exceptions/http.exception'

// api constant
import ConstantAPI from '../constants/api.constant'

// message constant
import ConstantMessage from '../constants/message.constant'

// http constant
import ConstantHttpCode from '../constants/http.code.constant'
import ConstantHttpReason from '../constants/http.reason.constant'

// logger
import logger from '../utils/logger.util'
import { IProject,IProjectDocument } from '../models/project.model';
import { Types } from 'mongoose'

class ProjectController implements Controller {
    public path: string
    public router: Router
    private projectService: ProjectService
    private authenticated: Authenticated
    private validate: Validate

    constructor() {
        this.path = ConstantAPI.PROJECTS
        this.router = Router()
        this.projectService = new ProjectService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.PROJECT_CREATE}`,
            this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.createProject),
            this.createProject,
        )

        this.router.put(
            `${this.path}${ConstantAPI.PROJECT_UPDATE}`,
            this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.updateProject),
            this.updateProject,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PROJECT_GET}`,
            this.authenticated.verifyTokenAndAuthorization,
            this.getProject,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PROJECT_GET_ALL}`,
            this.authenticated.verifyTokenAndAuthorization,
            this.listProject,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PROJECT_DELETE}`,
            this.authenticated.verifyTokenAndAuthorization,
            this.deleteProject,
        )
    }

    private createProject = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_project: IProject = req.body.project
            const saved_project = await this.projectService.createProjectService(input_project);
            logger.info(`user ${input_project.project_admin_name} found`)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PROJECT_CREATE_SUCCESS,
                data: saved_project,
            })
        } catch (err: any) {
            next(
                new HttpException(
                    ConstantHttpCode.INTERNAL_SERVER_ERROR,
                    ConstantHttpReason.INTERNAL_SERVER_ERROR,
                    err?.message,
                ),
            )
        }
    }

    private listProject = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const projects: IProjectDocument[] = await this.projectService.listProjectsService()
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PROJECT_FOUND,
                data: projects,
            })
        } catch (err: any) {
            next(
                new HttpException(
                    ConstantHttpCode.INTERNAL_SERVER_ERROR,
                    ConstantHttpReason.INTERNAL_SERVER_ERROR,
                    err?.message,
                ),
            )
        }
    }

    private getProject = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const project_id: string = req.params.project_id;
            const project: IProject | null = await this.projectService.getProjectService(new Types.ObjectId(project_id));
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PROJECT_FOUND,
                data: project,
            })
        } catch (err: any) {
            next(
                new HttpException(
                    ConstantHttpCode.INTERNAL_SERVER_ERROR,
                    ConstantHttpReason.INTERNAL_SERVER_ERROR,
                    err?.message,
                ),
            )
        }
    }

    private updateProject = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const project_id: string = req.params.project_id;
            const input_project: IProject = req.body.project;
            const updated_project: IProjectDocument | null = await this.projectService.updateProjectService(new Types.ObjectId(project_id), input_project)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PROJECT_UPDATE_SUCCESS,
                data: updated_project,
            })
        } catch (err: any) {
            next(
                new HttpException(
                    ConstantHttpCode.INTERNAL_SERVER_ERROR,
                    ConstantHttpReason.INTERNAL_SERVER_ERROR,
                    err?.message,
                ),
            )
        }
    }

    private deleteProject = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const project_id: string = req.params.project_id;
            const deleted_project: IProjectDocument | null = await this.projectService.deleteProjectService(new Types.ObjectId(project_id));

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PROJECT_DELETE_SUCCESS,
                data: deleted_project,
            })
        } catch (err: any) {
            next(
                new HttpException(
                    ConstantHttpCode.INTERNAL_SERVER_ERROR,
                    ConstantHttpReason.INTERNAL_SERVER_ERROR,
                    err?.message,
                ),
            )
        }
    }
}

export default ProjectController
