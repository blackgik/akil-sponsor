import { BadRequestError, DuplicateError, InternalServerError } from '../../../lib/appErrors.js';
import ProductModel from '../../models/products/ProductModel.js';
import ProjectModel from '../../models/projects/ProjectModel.js';

export const createProject = async ({ body, user }) => {
  try {
    const checkProject = await ProjectModel.findOne({
      project_name: body.project_name,
      sponsor_id: user._id
    });

    if (checkProject) throw new DuplicateError('Project Created successfully');

    const product_item_display = [];

    for (let item of body.product_items) {
      const item_name = await ProductModel.findById(item);

      if (!item_name) continue;

      product_item_display.push(item_name.product_name);
    }

    const projectData = {
      ...body,
      product_item_display,
      sponsor_id: user._id
    };

    const project = await ProjectModel.create(projectData);

    if (!project) throw new InternalServerError('Project not created. Server is down');

    return project;
  } catch (err) {
    console.log(err);
    throw new BadRequestError(err.message || 'Could not create project');
  }
};
