import { createUser, createUserBody, deleteUser, getUser, getUsers, updateUser, updateUserBody } from './users';
import { createOrUpdateRoleBody, createRole, deleteRole, getRole, getRoles, updateRole } from './roles';
import { createOccupation, createOrUpdateOccupationBody, deleteOccupation, getOccupation, getOccupations, updateOccupation } from './occupations';
import { createOrUpdateProduct_categoryBody, createProduct_category, deleteProduct_category, getProduct_category, getProduct_categories, updateProduct_category } from './product_categories';
import { createProduct, createProductBody, deleteProduct, getProduct, getProducts, updateProduct, updateProductBody } from './products';

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
      url: 'http://localhost:4500/',
      description: 'Local Server',
    },
    {
      url: 'https://api.akilaah.com',
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
    'users/{id}': {
      delete: deleteUser,
      get: getUser,
      patch: updateUser,
    },
    roles: {
      post: createRole,
      get: getRoles,
    },
    'roles/{id}': {
      delete: deleteRole,
      get: getRole,
      put: updateRole,
    },
    occupations: {
      post: createOccupation,
      get: getOccupations,
    },
    'occupations/{id}': {
      delete: deleteOccupation,
      get: getOccupation,
      put: updateOccupation,
    },
    product_categories: {
      post: createProduct_category,
      get: getProduct_categories,
    },
    'product-categories/{id}': {
      delete: deleteProduct_category,
      get: getProduct_category,
      put: updateProduct_category,
    },
    products: {
      post: createProduct,
      get: getProducts,
    },
    'products/{id}': {
      delete: deleteProduct,
      get: getProduct,
      put: updateProduct,
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
      createUserBody,
      updateUserBody,
      createOrUpdateRoleBody,
      createOrUpdateOccupationBody,
      createOrUpdateProduct_categoryBody,
      createProductBody,
      updateProductBody,
    },
  },
}

export { apiDocumentation }
