import { createUser, createUserBody, deleteUser, getUser, getUsers, updateUser, updateUserBody } from './users';
import { createOrUpdateRoleBody, createRole, deleteRole, getRole, getRoles, updateRole } from './roles';
import { createOccupation, createOrUpdateOccupationBody, deleteOccupation, getOccupation, getOccupations, updateOccupation } from './occupations';
import { createOrUpdateProduct_categoryBody, createProduct_category, deleteProduct_category, getProduct_category, getProduct_categories, updateProduct_category } from './product_categories';
import { createProduct, createProductBody, deleteProduct, getProduct, getProducts, updateProduct, updateProductBody } from './products';
import { createPartner, createPartnerBody, deletePartner, getPartner, getPartners, updatePartner, updatePartnerBody } from './partners';
import { createSponsor, deleteSponsor, getSponsor, getSponsors, updateSponsor } from './sponsors';
// api constant
import ConstantAPI from '../constants/api.constant'
import customConfig from "../config/default";
import { login, loginBody, onboardSponsor, onboardSponsorBody, verifyOtp, verifyOtpBody } from './auth';

const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'AKILAAH partners and sponsors REST API - Documentation',
    description:
      'Management of partners and sponsors from onboarding to product subscription',
    termsOfService: 'https://akilaah.com/terms',
    contact: {
      name: 'Honoré OUEDRAOGO',
      email: 'dev@honoreouedraogo.net',
      url: 'https://honoreouedraogo.net',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: `${customConfig.baseLocalUrl}${ConstantAPI.API}//`,
      description: 'Local Server',
    },
    {
      url: `${customConfig.baseProdUrl}${ConstantAPI.API}//`,
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Roles',
    },
    {
      name: 'Users',
    },
    {
      name: 'Sponsors',
    },
    {
      name: 'Beneficiaries',
    },
    {
      name: 'Partners',
    },
    {
      name: 'Products',
    },
    {
      name: 'Product-categories',
    },
    {
      name: 'Authentication',
    },
    {
      name: 'Occupations',
    },
  ],
  paths: {
    users: {
      post: createUser,
      get: getUsers,
    },
    'users/delete/{id}': {
      delete: deleteUser,
    },
    'users/find/{id}': {
      get: getUser,
    },
    'users/{id}': {
      patch: updateUser,
    },
    roles: {
      post: createRole,
      get: getRoles,
    },
    'roles/delete/{id}': {
      delete: deleteRole,
    },
    'roles/find/{id}': {
      get: getRole,
    },
    'roles/{id}': {
      patch: updateRole,
    },
    occupations: {
      post: createOccupation,
      get: getOccupations,
    },
    'occupations/delete/{id}': {
      delete: deleteOccupation,
    },
    'occupations/find/{id}': {
      get: getOccupation,
    },
    'occupations/{id}': {
      patch: deleteOccupation,
    },
    product_categories: {
      post: createProduct_category,
      get: getProduct_categories,
    },
    'product_categories/delete/{id}': {
      delete: deleteProduct_category,
    },
    'product_categories/find/{id}': {
      get: getProduct_category,
    },
    'product_categories/{id}': {
      patch: updateProduct_category,
    },
    products: {
      post: createProduct,
      get: getProducts,
    },
    'products/delete/{id}': {
      delete: deleteProduct,
    },
    'products/find/{id}': {
      get: getProduct,
    },
    'products/{id}': {
      patch: updateProduct,
    },
    partners: {
      post: createPartner,
      get: getPartners,
    },
    'partners/delete/{id}': {
      delete: deletePartner,
    },
    'partners/find/{id}': {
      get: getPartner,
    },
    'partners/{id}': {
      patch: updatePartner,
    },
    sponsors: {
      post: createSponsor,
      get: getSponsors,
    },
    'sponsors/login': {
      post: login,
    },
    'sponsors/onboarding': {
      post: onboardSponsor,
    },
    'sponsors/verify-mail': {
      post: verifyOtp,
    },
    'sponsors/delete/{id}': {
      delete: deleteSponsor,
    },
    'sponsors/find/{id}': {
      get: getSponsor,
    },
    'sponsors/{id}': {
      patch: updateSponsor,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      onboardSponsorBody,
      loginBody,
      createUserBody,
      updateUserBody,
      verifyOtpBody,
      createOrUpdateRoleBody,
      createOrUpdateOccupationBody,
      createOrUpdateProduct_categoryBody,
      createProductBody,
      updateProductBody,
      createPartnerBody,
      updatePartnerBody,
    },
  },
}

export { apiDocumentation }
