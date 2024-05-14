const partnerResponse = {
    partner_id: {
        type: 'string',
        example: '60564fcb542017cdc3844818',
    },
    partner_business_name: {
        type: 'string',
        example: 'BLACKROCK',
    },
    partner_admin_name: {
        type: 'string',
        example: 'John Snow',
    },
    partner_code: {
        type: 'string',
        example: 'BLACKROCK123',
    },
    partner_slug: {
        type: 'string',
        example: 'BLACKROCK',
    },
    partner_sector: {
        type: 'string',
        example: 'Finance',
    },
    partner_phone: {
        type: 'string',
        example: '+22675552635',
    },
    partner_avatar: {
        type: 'string',
        example: 'ras',
    },
    partner_website: {
        type: 'string',
        example: 'link',
    },
    partner_address: {
        type: 'string',
        example: 'address',
    },
    partner_email: {
        type: 'string',
        example: 'john.snow@email.com',
    },
    isApproved: {
        type: 'boolean',
        example: true,
    },
    tosAgreement: {
        type: 'boolean',
        example: true,
    },
    on_trial: {
        type: 'boolean',
        example: true,
    },
    hasPaid: {
        type: 'boolean',
        example: true,
    },
    acctstatus: {
        type: 'string',
        example: 'pending',
    },
    start_trial_ts: {
        type: 'string',
        example: '2024-04-25',
    },
    end_trial_ts: {
        type: 'string',
        example: '2024-04-25',
    },
    partner_location: {
        type: 'object',
        properties: {
            latitude: {
                type: 'string',
                example: "latitude",
            },
            longitude: {
                type: 'string',
                example: "longitude",
            }
        },
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

const partnerNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Partner with id: "71675fcb655047cdc4955929" not found',
                    },
                },
            },
        },
    },
};

const invalidPartnerData = {
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

const createPartnerBody = {
    type: 'object',
    properties: {
        partner_business_name: {
            type: 'string',
            example: 'BLACKROCK',
        },
        partner_admin_name: {
            type: 'string',
            example: 'John Snow',
        },
        partner_slug: {
            type: 'string',
            example: 'BLACKROCK',
        },
        partner_sector: {
            type: 'string',
            example: 'Finance',
        },
        partner_phone: {
            type: 'string',
            example: '+22675552635',
        },
        partner_address: {
            type: 'string',
            example: 'address',
        },
        partner_email: {
            type: 'string',
            example: 'john.snow@email.com',
        },
        tosAgreement: {
            type: 'boolean',
            example: true,
        },
        password: {
            type: 'string',
            description: "unencrypted partner's password",
            example: '!1234aWe1Ro3$#',
        },        
    },
};

const updatePartnerBody = {
    type: 'object',
    properties: {
        partner_business_name: {
            type: 'string',
            example: 'BLACKROCK',
        },
        partner_admin_name: {
            type: 'string',
            example: 'John Snow',
        },
        partner_slug: {
            type: 'string',
            example: 'BLACKROCK',
        },
        partner_sector: {
            type: 'string',
            example: 'Finance',
        },
        partner_phone: {
            type: 'string',
            example: '+22675552635',
        },
        partner_address: {
            type: 'string',
            example: 'address',
        },
        partner_avatar: {
            type: 'string',
            example: 'ras',
        },
        partner_website: {
            type: 'string',
            example: 'link',
        },
        partner_email: {
            type: 'string',
            example: 'john.snow@email.com',
        },
        partner_location: {
            type: 'object',
            properties: {
                latitude: {
                    type: 'string',
                    example: "latitude",
                },
                longitude: {
                    type: 'string',
                    example: "longitude",
                }
            },
        },
    },
};

const createPartner = {
    tags: ['Partners'],
    description: 'Create a new partner in the system',
    operationId: 'createPartner',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createPartnerBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Partner created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            partner_id: {
                                type: 'string',
                                example: '60564fcb542017cdc3844818',
                            },
                            partner_business_name: {
                                type: 'string',
                                example: 'BLACKROCK',
                            },
                            partner_admin_name: {
                                type: 'string',
                                example: 'John Snow',
                            },
                            partner_code: {
                                type: 'string',
                                example: 'BLACKROCK123',
                            },
                            partner_slug: {
                                type: 'string',
                                example: 'BLACKROCK',
                            },
                            partner_sector: {
                                type: 'string',
                                example: 'Finance',
                            },
                            partner_phone: {
                                type: 'string',
                                example: '+22675552635',
                            },
                            partner_avatar: {
                                type: 'string',
                                example: 'ras',
                            },
                            partner_website: {
                                type: 'string',
                                example: 'link',
                            },
                            partner_address: {
                                type: 'string',
                                example: 'address',
                            },
                            partner_email: {
                                type: 'string',
                                example: 'john.snow@email.com',
                            },
                            isApproved: {
                                type: 'boolean',
                                example: true,
                            },
                            tosAgreement: {
                                type: 'boolean',
                                example: true,
                            },
                            on_trial: {
                                type: 'boolean',
                                example: true,
                            },
                            hasPaid: {
                                type: 'boolean',
                                example: true,
                            },
                            acctstatus: {
                                type: 'string',
                                example: 'pending',
                            },
                            start_trial_ts: {
                                type: 'string',
                                example: '2024-04-25',
                            },
                            end_trial_ts: {
                                type: 'string',
                                example: '2024-04-25',
                            },
                            partner_location: {
                                type: 'object',
                                properties: {
                                    latitude: {
                                        type: 'string',
                                        example: "latitude",
                                    },
                                    longitude: {
                                        type: 'string',
                                        example: "longitude",
                                    }
                                },
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
        '422': invalidPartnerData,
        '500': internalServerError,
    },
};

const getPartners = {
    tags: ['Partners'],
    description: 'Retrieve all the partners',
    operationId: 'getPartners',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Partners retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: partnerResponse,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

const getPartner = {
    tags: ['Partners'],
    description: 'Retrieve one partner',
    operationId: 'getPartner',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Partner ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Partner retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: partnerResponse,
                    },
                },
            },
        },
        '201': partnerNotFound,
        '500': internalServerError,
    },
};

const updatePartner = {
    tags: ['Partners'],
    description: 'Update a partner',
    operationId: 'updatePartner',
    security,
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Partner ID',
            required: true,
            type: 'string',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/updatePartnerBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Partner retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: partnerResponse,
                    },
                },
            },
        },
        '201': partnerNotFound,
        '422': invalidPartnerData,
        '500': internalServerError,
    },
};

const deletePartner = {
    tags: ['Partners'],
    description: 'Delete a partner',
    operationId: 'deletePartner',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Partner ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Partner deleted successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Partner deleted successfully!',
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

export { createPartner, createPartnerBody, deletePartner, getPartners, getPartner, updatePartnerBody, updatePartner };