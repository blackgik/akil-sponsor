import env from '../../config/env.js';
import {
    DuplicateError,
    InternalServerError,
    NotFoundError
} from '../../../lib/appErrors.js';
import RestockModel from '../../models/products/RestockModel.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';


export const createNewRestock = async ({ user, body }) => {
    const restockData = {
        ...body
    };

    const created = await RestockModel.create(restockData);
    if (!created)
        throw new InternalServerError('server slip error. Please Check your Input properly');

    return true;
};

export const createNewRestockDraft = async ({ user, body }) => {
    const restockData = {
        ...body,
        rtkstatus: 'draft'
    };

    const created = await RestockModel.create(restockData);
    if (!created)
        throw new InternalServerError('server slip error. Please Check your Input properly');


    return true;
};

export const fetchRestock = async ({ user, params }) => {
    let { page_no, no_of_requests, search, status } = params;

    page_no = Number(page_no) || 1;
    no_of_requests = Number(no_of_requests) || Infinity;

    const filterData = { organization_id: user._id };

    const query = typeof search !== 'undefined' ? search : false;
    const rtkstatus = typeof status !== 'undefined' ? status : false;
    const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
    const searchRgx = rgx(query);

    if (query) {
        filterData['$or'] = [{ restock_name: searchRgx }];
    }

    if (rtkstatus) {
        filterData['$or'] = [{ rtkstatus: rtkstatus }];
    }

    const totalCount = await RestockModel.countDocuments({
        ...filterData,
        is_active: true
    });

    const fetchData = await RestockModel
        .find({ ...filterData, is_active: true })
        .populate({
            path: 'product_id',
            model: 'Product'
        })
        .sort({ createdAt: -1 })
        .skip((page_no - 1) * no_of_requests)
        .limit(no_of_requests);

    const available_pages = Math.ceil(totalCount / no_of_requests)
        ? Math.ceil(totalCount / no_of_requests)
        : 1;

    return { page_no, available_pages, fetchData };
};


//------ common restock handlers --------------------\\

export const fetchAllRestocks = async ({ user, params }) => {
    let { page_no, no_of_requests, search, status } = params;

    page_no = Number(page_no) || 1;
    no_of_requests = Number(no_of_requests) || I

    const rtkstatus = typeof status !== 'undefined' ? status : false;
    const query = typeof search !== 'undefined' ? search : false;
    const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
    const searchRgx = rgx(query);

    const filterData = { is_active: true };

    if (query) {
        filterData['$or'] = [{ restock_name: searchRgx }];
    }

    if (rtkstatus) {
        filterData['$or'] = [{ rtkstatus: rtkstatus }];
    }

    let fetchedData = [];

    const restockCount = await RestockModel.countDocuments({ ...filterData });
    let restockData = await RestockModel.find({ ...filterData }).populate({
        path: 'product_id',
        model: 'Product'
    });

    const count = restockCount;

    let startIndex = (page_no - 1) * no_of_requests;
    let endIndex = page_no * no_of_requests;

    fetchedData = [...restockData];
    fetchedData = fetchedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    fetchedData = fetchedData.slice(startIndex, endIndex);

    const available_pages = Math.ceil(count / no_of_requests);

    fetchedData = fetchedData.reduce(function (result, current) {

        return result;
    }, {});

    return { page_no, available_pages, fetchedData };
};

export const getSingleRestock = async ({ user, restock_id }) => {
    let restockInView;

    restockInView = await RestockModel.findById(restock_id).populate({
        path: 'product_id',
        model: 'Product'
    });

    if (!restockInView) throw new NotFoundError('restock  does not exist');

    return restockInView;
};

export const updateSingleRestock = async ({ restock_id, body, user }) => {
    const updates = Object.keys(body);

    let restockInView;

    restockInView = await RestockModel.findById(restock_id);

    if (!restockInView) throw new NotFoundError('restock  does not exist');

    updates.forEach((update) => (restockInView[update] = body[update]));

    await restockInView.save();

    return true;
};

export const cancelRestock = async ({ user, restock_id }) => {

    let restockInView;

    restockInView = await RestockModel.findById(restock_id);

    if (!restockInView) throw new NotFoundError('restock  does not exist');

    restockInView.rtkstatus = 'draft';

    await restockInView.save();

    return true;
};

export const publishRestock = async ({ user, restock_id }) => {

    let restockInView;

    restockInView = await RestockModel.findById(restock_id);

    if (!restockInView) throw new NotFoundError('restock  does not exist');

    restockInView.rtkstatus = 'published';

    await restockInView.save();

    return true;
};
