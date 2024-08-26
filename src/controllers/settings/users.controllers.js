import appResponse from '../../../lib/appResponse.js';
import {
  checkIfBenficiary,
  craeteNewUser,
  deleteUser,
  editUser,
  fetchUser,
  fetchUsers,
  updateStatus
} from '../../services/settings/users.service.js';
import { downloadExcel, removeFile } from '../../utils/general.js';

export const createNewuserHandler = async (req, res) => {
  const { user, body } = req;

  const response = await craeteNewUser({ user, body });

  res.send(appResponse('Created successfully', response));
};

export const fetchUsersHandler = async (req, res) => {
  const { user, query } = req;

  const responses = await fetchUsers({ user, param: query });
  if (query.download === 'on') {
    const worksheet = 'user_list';
    const worksheetHeaders = [
      { header: 'User Name', key: 'user_name', width: 50 },
      { header: 'Gender', key: 'gender', width: 50 },
      { header: 'Email', key: 'email', width: 50 },
      { header: 'Phone', key: 'phone', width: 50 },
      { header: 'Role', key: 'role_name', width: 50 },
      { header: 'CreatedAt', key: 'createdAt', width: 50 }
    ];

    let mainlist = [];

    for (let response of responses) {
      mainlist.push({
        user_name: response.user_name,
        gender: response.gender,
        email: response.email,
        phone: response.phone,
        role_name: response.role_id.role_name,
        createdAt: response.createdAt
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainlist);
    res.send(appResponse('File paths', file));
  }

  res.send(appResponse('Fetched successfully', responses));
};

export const fetchUserHandler = async (req, res) => {
  const { user, params } = req;

  const { user_id } = params;

  const response = await fetchUser({ user_id, user });

  res.send(appResponse('Fetched successfully', response));
};

export const editUserHandler = async (req, res) => {
  const { user, body, params } = req;

  const { user_id } = params;

  const response = await editUser({ user_id, body, user });

  res.send(appResponse('Edited successfully', response));
};

export const updateStatusHandler = async (req, res) => {
  const { user, body, params } = req;

  const { user_id } = params;

  const response = await updateStatus({ user_id, body, user });

  res.send(appResponse('Edited successfully', response));
};

export const checkIfBenficiaryHandler = async (req, res) => {
  const { user, query } = req;

  const { email } = query;

  const response = await checkIfBenficiary({ user, email });

  res.send(appResponse('Fetched successfully', response));
};

export const deleteUserHandler = async (req, res) => {
  const { params } = req;

  const { user_id } = params;

  const response = await deleteUser({ user_id });

  res.send(appResponse('Deleted successfully', response));
};

export const downloadExcelHandler = async (req, res) => {
  const filePath = `xcels/${req.query.code}.xlsx`;

  res.download(filePath, `${req.query.code}.xlsx`, (err) => {
    if (!err) {
      removeFile(filePath);
    } else {
      console.error(err);
      res.send({
        success: false,
        message: 'File Path not found',
        data: null
      });
    }
  });
};
