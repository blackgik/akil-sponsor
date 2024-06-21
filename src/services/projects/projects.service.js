import { BadRequestError, DuplicateError, InternalServerError } from '../../../lib/appErrors.js';
import ProductModel from '../../models/products/ProductModel.js';
import ProjectModel from '../../models/projects/ProjectModel.js';
import mongoose from 'mongoose';

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

// export const projectDashBoard1 = async ({ params, user }) => {
//   let {
//     page_no,
//     no_of_requests,
//     search,
//     productName,
//     productItem,
//     dateCreated,
//     project_status,
//     project_state,
//     download
//   } = params;

//   page_no = Number(page_no) || 1;
//   no_of_requests = Number(no_of_requests) || 20;
//   // const { today, timeDiff } = dateFilters({ duration, from, to, todayTime });

//   // const filter = { sponsor_id: user._id, createdAt: { $gte: timeDiff, $lte: today } };
//   const filter = { sponsor_id: user._id };

//   const query = typeof search !== 'undefined' ? search : false;

//   const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
//   const searchRgx = rgx(query);

//   if (query) {
//     filter['$or'] = [{ project_name: searchRgx }, { description: searchRgx }];
//   }

//   if (productName) {
//     filter.product_type = mongoose.Types.ObjectId(productName);
//   }

//   if (productItem) {
//     filter.product_items = mongoose.Types.ObjectId(productItem);
//   }

//   if (dateCreated) {
//     filter.createdAt = { $gte: new Date(dateCreated) };
//   }

//   if (project_status) {
//     filter.project_status = project_status;
//   }

//   if (project_state) {
//     filter.project_state = project_state;
//   }

//   const sortData =
//     download === 'on'
//       ? [{ $sort: { createdAt: -1 } }]
//       : [
//           { $sort: { createdAt: -1 } },
//           { $skip: (page_no - 1) * no_of_requests },
//           { $limit: no_of_requests }
//         ];
//   const userProjects = await ProjectModel.find(filter);

//   let fetchedData = await ProjectModel.aggregate([
//     {
//       $match: { ...filter }
//     },

//     {
//       $lookup: {
//         from: 'ProductCategory',
//         localField: 'product_type',
//         foreignField: '_id',
//         as: 'product_type_info'
//       }
//     },

//     { $unwind: '$product_type_info' },

//     {
//       $lookup: {
//         from: 'Product',
//         localField: 'product_items',
//         foreignField: '_id',
//         as: 'product_items_info'
//       }
//     },

//     { $unwind: '$product_items_info' },

//     {
//       $project: {
//         project_name: 1,
//         description: 1,
//         product_type_info: { name: 1 },
//         product_items_info: { name: 1 },
//         createdAt: 1,
//         project_status: 1,
//         project_state: 1
//       }
//     },

//     {
//       $facet: {
//         edges: [...sortData],
//         pageInfo: [{ $group: { _id: null, count: { $sum: 1 } } }]
//       }
//     }
//   ]);

//   const totalPages = fetchedData[0].pageInfo.length ? fetchedData[0].pageInfo[0].count : 0;

//   let available_pages = Math.ceil(totalPages / no_of_requests);

//   fetchedData = fetchedData[0].edges;

//   available_pages = available_pages ? available_pages : 0;

//   if (download === 'on') {
//     // Code to generate and return the Excel file
//     const excelData = fetchedData.map((item) => ({
//       ProductName: item.project_name,
//       DateCreated: item.createdAt
//     }));
//     // Implement the logic to create and send the Excel file using a library like exceljs
//     // return the generated file here
//   }

//   return {
//     page_no,
//     available_pages,
//     totalPages,
//     fetched_data: fetchedData,
//     userProjects
//   };
// };

export const projectDashBoard = async ({ params, user }) => {
  let {
    page_no,
    no_of_requests,
    search,
    productName,
    productItem,
    dateCreated,
    project_status,
    project_state,
    download
  } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;

  const filter = { sponsor_id: mongoose.Types.ObjectId(user._id) };

  if (search) {
    const searchRgx = new RegExp(`.*${search}.*`, 'i');
    filter['$or'] = [{ project_name: searchRgx }, { description: searchRgx }];
  }

  if (productName) {
    filter.product_type = mongoose.Types.ObjectId(productName);
  }

  if (productItem) {
    filter.product_items = mongoose.Types.ObjectId(productItem);
  }

  if (dateCreated) {
    filter.createdAt = { $gte: new Date(dateCreated) };
  }

  if (project_status) {
    filter.project_status = project_status;
  }

  if (project_state) {
    filter.project_state = project_state;
  }

  const skip = (page_no - 1) * no_of_requests;
  const limit = no_of_requests;

  const aggregationPipeline = [
    { $match: filter },
    { $lookup: {
        from: 'productcategories',
        localField: 'product_type',
        foreignField: '_id',
        as: 'product_type_info'
    }},
    { $unwind: { path: '$product_type_info', preserveNullAndEmptyArrays: true } },
    { $lookup: {
        from: 'products',
        localField: 'product_items',
        foreignField: '_id',
        as: 'product_items_info'
    }},
    { $unwind: { path: '$product_items_info', preserveNullAndEmptyArrays: true } },
    { $project: {
        project_name: 1,
        description: 1,
        'product_type_info.name': 1,
        'product_items_info.name': 1,
        createdAt: 1,
        project_status: 1,
        project_state: 1
    }},
    { $facet: {
        metadata: [{ $count: 'total' }, { $addFields: { page: page_no } }],
        data: [{ $skip: skip }, { $limit: limit }, { $sort: { createdAt: -1 } }]
    }}
  ];

  let result = await ProjectModel.aggregate(aggregationPipeline);
  let fetchedData = result[0].data;
  let totalDocuments = result[0].metadata.length ? result[0].metadata[0].total : 0;
  const totalPages = Math.ceil(totalDocuments / no_of_requests);

  // Categorize projects based on project_state
  const projectInProgress = fetchedData.filter(project => project.project_state === 'in-progress');
  const draftedProject = fetchedData.filter(project => project.project_state === 'pending');
  const completedProject = fetchedData.filter(project => project.project_state === 'completed');
  const cancelledProject = fetchedData.filter(project => project.project_state === 'cancelled');

  if (download === 'on') {
    const excelData = fetchedData.map((item) => ({
      ProductName: item.project_name,
      DateCreated: item.createdAt
    }));
    const file = await downloadExcel('Projects Report', [
      { header: 'ProductName', key: 'ProductName', width: 50 },
      { header: 'DateCreated', key: 'DateCreated', width: 50 }
    ], excelData);
    return file; // Return the generated file
  }

  return {
    page_no,
    available_pages: totalPages,
    totalPages,
    projectInProgress,
    draftedProject,
    completedProject,
    cancelledProject
  };
};

// export const projectDashBoard2 = async ({ params, user }) => {
//   let {
//     page_no,
//     no_of_requests,
//     search,
//     productName,
//     productItem,
//     dateCreated,
//     project_status,
//     project_state,
//     download
//   } = params;

//   page_no = Number(page_no) || 1;
//   no_of_requests = Number(no_of_requests) || 20;

//   const filter = { sponsor_id: user._id };

//   if (search) {
//     const searchRgx = new RegExp(`.*${search}.*`, 'i');
//     filter['$or'] = [{ project_name: searchRgx }, { description: searchRgx }];
//   }

//   if (productName) {
//     filter.product_type = mongoose.Types.ObjectId(productName);
//   }

//   if (productItem) {
//     filter.product_items = mongoose.Types.ObjectId(productItem);
//   }

//   if (dateCreated) {
//     filter.createdAt = { $gte: new Date(dateCreated) };
//   }

//   if (project_status) {
//     filter.project_status = project_status;
//   }

//   if (project_state) {
//     filter.project_state = project_state;
//   }

//   const skip = (page_no - 1) * no_of_requests;
//   const limit = no_of_requests;

//   // Find the total count of documents for pagination
//   const totalDocuments = await ProjectModel.countDocuments(filter);
//   const totalPages = Math.ceil(totalDocuments / no_of_requests);

//   // Fetch the filtered and paginated data
//   let fetchedData = await ProjectModel.find(filter)
//     .populate('product_type', 'name')
//     .populate('product_items', 'name')
//     .sort({ createdAt: -1 })
//     .skip(skip)
//     .limit(limit)
//     .lean(); // Use lean for faster queries when you don't need mongoose documents

//   // Categorize projects based on project_state
//   const projectInProgress = fetchedData.filter(project => project.project_state === 'in-progress');
//   const draftedProject = fetchedData.filter(project => project.project_state === 'pending');
//   const completedProject = fetchedData.filter(project => project.project_state === 'completed');
//   const cancelledProject = fetchedData.filter(project => project.project_state === 'cancelled');

//   if (download === 'on') {
//     const excelData = fetchedData.map((item) => ({
//       ProductName: item.project_name,
//       DateCreated: item.createdAt
//     }));
//     const file = await downloadExcel('Projects Report', [
//       { header: 'ProductName', key: 'ProductName', width: 50 },
//       { header: 'DateCreated', key: 'DateCreated', width: 50 }
//     ], excelData);
//     return file; // Return the generated file
//   }

//   return {
//     page_no,
//     available_pages: totalPages,
//     totalPages,
//     projectInProgress,
//     draftedProject,
//     completedProject,
//     cancelledProject
//   };
// };


