import { createUser, createUserBody, deleteUser, getUser, getUsers, updateUser, updateUserBody } from './users.js';
import { createOrUpdateRoleBody, createRole, deleteRole, getRole, getRoles, updateRole } from './roles.js';
import { createOccupation, createOrUpdateOccupationBody, deleteOccupation, getOccupation, getOccupations, updateOccupation } from './occupations.js';
import { createOrUpdateProduct_categoryBody, createProduct_category, deleteProduct_category, getProduct_category, getProduct_categories, updateProduct_category } from './product_categories.js';
import { createProduct, createProductBody, deleteProduct, getProduct, getProducts, updateProduct, updateProductBody } from './products.js';
import { createPartner, createPartnerBody, deletePartner, getPartner, getPartners, updatePartner, updatePartnerBody } from './partners.js';
import { createSponsor, deleteSponsor, getSponsor, getSponsors, updateSponsor } from './sponsors.js';
// api constant


import { forgotPwd, listePreferences, login, loginBody, onboardSponsor, onboardSponsorBody, resendOtp, resetPwd, sendOtpBody, verifyOtp, verifyOtpBody } from './auth.js';
import { createBeneficiary, createBeneficiaryBody, deleteBeneficiary, getBeneficiaries, getBeneficiariesBySponsor, getBeneficiary, updateBeneficiary, updateBeneficiaryBody } from './beneficiaries.js';

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
      url: `http://localhost:4000/api/v1/sponsor/stag/`,
      description: 'Local Server',
    },
    {
      url: `http://localhost:4000/api/v1/sponsor/stag/`,
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
      
    },
  },
}

export { apiDocumentation }
