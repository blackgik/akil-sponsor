const beneficiaryResponse = {
    firstname: {
        type: 'string',
        example: 'RAS',
    },
    lastname: {
        type: 'string',
        example: 'RAS',
    },
    othername: {
        type: 'string',
        example: 'RAS',
    },
    avatar: {
        type: 'string',
        example: 'RAS',
    },
    email: {
        type: 'string',
        example: 'RAS',
    },
    phone: {
        type: 'string',
        example: 'RAS',
    },
    gender: {
        type: 'string',
        example: 'RAS',
    },
    country: {
        type: 'string',
        example: 'RAS',
    },
    status: {
        type: 'string',
        example: 'RAS',
    },
    sponsor_id: {
        type: 'string',
        example: 'RAS',
    },
    createdAt: {
        type: 'string',
        example: '2021-03-20T19:40:59.495Z',
    },
    updatedAt: {
        type: 'string',
        example: '2021-03-20T21:23:10.879Z',
    },
};

const internalServerError = {
    description: 'Internal Server Error',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Internal Server Error',
                    },
                },
            },
        },
    },
};

const beneficiaryNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Beneficiary with id: "71675fcb655047cdc4955929" not found',
                    },
                },
            },
        },
    },
};

const invalidBeneficiaryData = {
    description: 'Invalid Data provided',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'The fields field1, field2 and field3 are required',
                    },
                },
            },
        },
    },
};

const security = [
    {
        bearerAuth: [],
    },
];

const createBeneficiaryBody = {
    type: 'object',
    properties: {
        firstname: {
            type: 'string',
            example: 'RAS',
        },
        lastname: {
            type: 'string',
            example: 'RAS',
        },
        othername: {
            type: 'string',
            example: 'RAS',
        },
        avatar: {
            type: 'string',
            example: 'RAS',
        },
        email: {
            type: 'string',
            example: 'RAS',
        },
        sponsor_id: {
            type: 'string',
            example: 'RAS',
        },
        phone: {
            type: 'string',
            example: 'RAS',
        },
        gender: {
            type: 'string',
            example: 'RAS',
        },
        country: {
            type: 'string',
            example: 'RAS',
        }
    },
};

const updateBeneficiaryBody = {
    type: 'object',
    properties: {
        firstname: {
            type: 'string',
            example: 'RAS',
        },
        lastname: {
            type: 'string',
            example: 'RAS',
        },
        othername: {
            type: 'string',
            example: 'RAS',
        },
        sponsor_id: {
            type: 'string',
            example: 'RAS',
        },
        avatar: {
            type: 'string',
            example: 'RAS',
        },
        email: {
            type: 'string',
            example: 'RAS',
        },
        phone: {
            type: 'string',
            example: 'RAS',
        },
        gender: {
            type: 'string',
            example: 'RAS',
        },
        country: {
            type: 'string',
            example: 'RAS',
        }
    },
};

const createBeneficiary = {
    tags: ['Beneficiaries'],
    description: 'Create a new beneficiary in the system',
    operationId: 'createBeneficiary',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createBeneficiaryBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Beneficiary created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            firstname: {
                                type: 'string',
                                example: 'RAS',
                            },
                            lastname: {
                                type: 'string',
                                example: 'RAS',
                            },
                            othername: {
                                type: 'string',
                                example: 'RAS',
                            },
                            sponsor_id: {
                                type: 'string',
                                example: 'RAS',
                            },
                            avatar: {
                                type: 'string',
                                example: 'RAS',
                            },
                            email: {
                                type: 'string',
                                example: 'RAS',
                            },
                            phone: {
                                type: 'string',
                                example: 'RAS',
                            },
                            gender: {
                                type: 'string',
                                example: 'RAS',
                            },
                            country: {
                                type: 'string',
                                example: 'RAS',
                            },
                            createdAt: {
                                type: 'string',
                                example: '2021-03-20T19:40:59.495Z',
                            },
                            updatedAt: {
                                type: 'string',
                                example: '2021-03-20T21:23:10.879Z',
                            },
                        },
                    },
                },
            },
        },
        '422': invalidBeneficiaryData,
        '500': internalServerError,
    },
};

const getBeneficiaries = {
    tags: ['Beneficiaries'],
    description: 'Retrieve all the beneficiarys',
    operationId: 'getBeneficiaries',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Beneficiaries retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: beneficiaryResponse,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

const getBeneficiariesBySponsor = {
    tags: ['Beneficiaries'],
    description: 'Retrieve all the beneficiaries by sponsor',
    operationId: 'getBeneficiariesBySponsor',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Sponsor ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Beneficiaries retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: beneficiaryResponse,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

const getBeneficiary = {
    tags: ['Beneficiaries'],
    description: 'Retrieve one beneficiary',
    operationId: 'getBeneficiary',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Beneficiary ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Beneficiary retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: beneficiaryResponse,
                    },
                },
            },
        },
        '201': beneficiaryNotFound,
        '500': internalServerError,
    },
};



const updateBeneficiary = {
    tags: ['Beneficiaries'],
    description: 'Update a beneficiary',
    operationId: 'updateBeneficiary',
    security,
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Beneficiary ID',
            required: true,
            type: 'string',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/updateBeneficiaryBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Beneficiary retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: beneficiaryResponse,
                    },
                },
            },
        },
        '201': beneficiaryNotFound,
        '422': invalidBeneficiaryData,
        '500': internalServerError,
    },
};

const deleteBeneficiary = {
    tags: ['Beneficiaries'],
    description: 'Delete a beneficiary',
    operationId: 'deleteBeneficiary',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Beneficiary ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Beneficiary deleted successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Beneficiary deleted successfully!',
                            },
                        },
                    },
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal Server Error',
                            },
                        },
                    },
                },
            },
        },
    },
};

export { createBeneficiary, createBeneficiaryBody, getBeneficiariesBySponsor, deleteBeneficiary, getBeneficiaries, getBeneficiary, updateBeneficiaryBody, updateBeneficiary };