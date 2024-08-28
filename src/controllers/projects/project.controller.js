import appResponse from '../../../lib/appResponse.js';
import {
  createProject,
  deleteProject,
  fetchGenerateList,
  generateProjectList,
  viewProject,
  saveGenerateList,
  updateProject,
  projectDashBoardStats,
  fetchAllProject,
  getProjectItem,
  closeProject,
  deleteAwardee,
  fetchBeneficiariesForProjects
} from '../../services/projects/projects.service.js';
import { codeGenerator } from '../../utils/codeGenerator.js';
import { downloadExcel } from '../../utils/general.js';

export const createProjectsHandler = async (req, res) => {
  const { body, user } = req;

  const response = await createProject({ body, user });

  res.send(appResponse('Created successfully', response));
};

export const generateProjectListHandler = async (req, res) => {
  const { user, query, params, body } = req;
  const { project_id } = params;

  const response = await generateProjectList({ user, param: query, project_id, body });

  res.send(appResponse('Generated successfully', response));
};

export const saveGenerateListHandler = async (req, res) => {
  const { user, query, params, body } = req;
  const { project_id } = params;

  const response = await saveGenerateList({ user, param: query, project_id, body });

  res.send(appResponse('Saved successfully', response));
};

export const fetchGenerateListHandler = async (req, res) => {
  const { query, user, params } = req;

  const { project_id } = params;
  console.log('here', params);

  const responses = await fetchGenerateList({ param: query, user, project_id });
  if (query.download === 'on') {
    const worksheet = 'Generated_List';
    const worksheetHeaders = [
      { header: 'Batch Code', key: 'batch_code', width: 50 },
      { header: 'Beneficiary', key: 'name', width: 50 },
      { header: 'Quantity per Person', key: 'quantity_per_person', width: 50 },
      { header: 'Project Start Date', key: 'start_date', width: 50 },
      { header: 'Project End Date', key: 'end_date', width: 50 },
      { header: 'Gender', key: 'gender', width: 50 },
      { header: 'Age', key: 'age', width: 50 },
      { header: 'Occupation', key: 'occupation', width: 50 },
      { header: 'State', key: 'state', width: 50 },
      { header: 'Project State', key: 'project_state', width: 50 },
      { header: 'Project Status', key: 'project_status', width: 50 },
      { header: 'LGA', key: 'lga', width: 50 },
      { header: 'Ward', key: 'ward', width: 50 },
      { header: 'Phone', key: 'phone', width: 50 },
      { header: 'Status', key: 'status', width: 50 },
      { header: 'Shortaged', key: 'is_shortaged', width: 50 },
      { header: 'Project Name', key: 'project_name', width: 50 },
      { header: 'Date Added', key: 'createdAt', width: 50 }
    ];

    let mainlist = [];

    for (let response of responses) {
      mainlist.push({
        batch_code: response.batch_code,
        name: response.name,
        gender: response.gender,
        age: response.age,
        occupation: response.occupation,
        state: response.state,
        lga: response.lga,
        ward: response.ward,
        phone: response.phone,
        status: response.status,
        is_shortaged: response.is_shortaged,
        project_name: response.project_id.project_name,
        quantity_per_person: response.project_id.quantity_per_person,
        start_date: response.project_id.start_date,
        end_date: response.project_id.end_date,
        project_state: response.project_id.project_state,
        project_status: response.project_id.project_status,
        createdAt: response.createdAt
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainlist);
    res.send(appResponse('File paths', file));
  } else {
    res.send(appResponse('Fetched successfully', responses));
  }
};

export const updateProjectHandler = async (req, res) => {
  const { user, body, params } = req;

  const { project_id } = params;

  const response = await updateProject({ user, body, project_id });

  res.send(appResponse('Updated successfully', response));
};

export const deleteProjectHandler = async (req, res) => {
  const { project_id } = req.params;

  const response = await deleteProject({ project_id });

  res.send(appResponse('Deleted successfully', response));
};

export const projectDashboardStatsHandler = async (req, res) => {
  const { params, user } = req;

  const response = await projectDashBoardStats({ params, user });
  res.send(appResponse('Fetched Project Dashboard Stats Successfully', response));
};

export const viewProjectHandler = async (req, res) => {
  const { params, user } = req;
  const { project_id } = params;

  const response = await viewProject({ project_id, user });
  res.send(appResponse('Fetched Project successfully', response));
};

export const fetchProjectHandler = async (req, res) => {
  const { query, user } = req;
  const params = query;

  const responses = await fetchAllProject({ user, params });

  if (params.download === 'on') {
    const worksheet = 'projects';
    const worksheetHeaders = [
      { header: 'Project Name', key: 'project_name', width: 50 },
      { header: 'Product Name', key: 'product_name', width: 50 },
      { header: 'Product Items', key: 'product_item_display', width: 50 },
      { header: 'Quantity Per Person', key: 'quantity_per_person', width: 50 },
      { header: 'Project Start Date', key: 'start_date', width: 50 },
      { header: 'Project End Date', key: 'end_date', width: 50 },
      { header: 'Is Active', key: 'is_active', width: 50 },
      { header: 'Project State', key: 'project_state', width: 50 },
      { header: 'Project Status', key: 'project_status', width: 50 },
      { header: 'Beneficiary Added Status', key: 'is_beneficary_added', width: 50 },
      { header: 'DateCreated', key: 'createdAt', width: 50 }
    ];

    let mainList = [];

    for (let response of responses) {
      mainList.push({
        project_name: response.project_name,
        quantity_per_person: response.quantity_per_person,
        start_date: response.start_date,
        end_date: response.end_date,
        is_active: response.is_active,
        product_item_display: response.product_item_display,
        product_name: response.product_type.product_category_name,
        is_beneficary_added: response.is_beneficary_added,
        project_status: response.project_status,
        project_state: response.project_state,
        createdAt: response.createdAt
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainList);

    res.send(appResponse('File paths', file));
  } else {
    res.send(appResponse('Fetched project dashboard data successfully', responses));
  }
};

export const getProjectItemHandler = async (req, res) => {
  const { product_id } = req.params;

  const { user } = req;

  const response = await getProjectItem({ user, product_id });

  res.send(appResponse('Fetched project item successfully', response));
};

export const closeProjectHandler = async (req, res) => {
  const { project_id } = req.params;

  const { user } = req;

  const response = await closeProject({ user, project_id });

  res.send(appResponse('Closed project successfully', response));
};

export const deleteAwardeeHandler = async (req, res) => {
  const { body, user } = req;

  const response = await deleteAwardee({ body, user });

  res.send(appResponse('Deleted successfully', response));
};

export const fetchBeneficiariesHandler = async (req, res) => {
  const { user, params } = req;
  const param = req.query;

  const { project_id } = params;

  const responses = await fetchBeneficiariesForProjects({ user, param, project_id });
  if (param.download === 'on') {
    const worksheet = 'beneficiary_list';
    const worksheetHeaders = [
      { header: 'Name', key: 'member_name', width: 50 },
      { header: 'Date_Of_Birth', key: 'dob', width: 50 },
      { header: 'Gender', key: 'gender', width: 50 },
      { header: 'Phone', key: 'phone', width: 50 },
      { header: 'Email', key: 'email', width: 50 },
      { header: 'Country_Of_Residence', key: 'country_of_residence', width: 50 },
      { header: 'State_Of_Origin', key: 'state_of_origin', width: 50 },
      { header: 'LGA', key: 'lga', width: 50 },
      { header: 'Employment_Status', key: 'employment_status', width: 50 },
      { header: 'Status', key: 'acctstatus', width: 50 },
      { header: 'Has_paid_reg', key: 'has_paid_reg', width: 50 },
      { header: 'DateCreated', key: 'createdAt', width: 50 }
    ];

    let mainList = [];

    for (let response of responses) {
      mainList.push({
        member_name: response.personal.member_name,
        dob: response.personal.dob,
        gender: response.personal.gender,
        phone: response.contact.phone,
        email: response.contact.email,
        country_of_residence: response.contact.country_of_residence,
        state_of_origin: response.personal.state_of_origin,
        lga: response.personal.lga,
        employment_status: response.employment_info.employment_status,
        acctstatus: response.acctstatus,
        has_paid_reg: response.has_paid_reg,
        createdAt: response.createdAt
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainList);

    res.send(appResponse('File paths', file));
  } else {
    res.send(appResponse('Fetched successfully', responses));
  }
};
