const sponsorResponse = {
    sponsor_id: {
        type: 'string',
        example: '60564fcb544047cdc3844818',
    },
    firstname: {
        type: 'string',
        example: 'BLACKROCK',
    },
    lastname: {
        type: 'string',
        example: 'BLACKROCK',
    },
    email: {
        type: 'string',
        example: 'BLACKROCK',
    },
    phone: {
        type: 'string',
        example: 'BLACKROCK',
    },
    state: {
        type: 'string',
        example: 'BLACKROCK',
    },
    country: {
        type: 'string',
        example: 'BLACKROCK',
    },
    address: {
        type: 'string',
        example: 'BLACKROCK',
    },
    isApproved: {
        type: 'boolean',
        example: true,
    },
    tosAgreement: {
        type: 'boolean',
        example: true,
    },
    psdAgreement: {
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

const sponsorNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Sponsor with id: "71675fcb655047cdc4955929" not found',
                    },
                },
            },
        },
    },
};

const invalidSponsorData = {
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

const createSponsorBody = {
    type: 'object',
    properties: {
        firstname: {
            type: 'string',
            example: 'BLACKROCK',
        },
        lastname: {
            type: 'string',
            example: 'BLACKROCK',
        },
        email: {
            type: 'string',
            example: 'BLACKROCK',
        },
        phone: {
            type: 'string',
            example: 'BLACKROCK',
        },
        state: {
            type: 'string',
            example: 'BLACKROCK',
        },
        country: {
            type: 'string',
            example: 'BLACKROCK',
        },
        address: {
            type: 'string',
            example: 'BLACKROCK',
        },
        password: {
            type: 'string',
            example: 'BLACKROCK',
        },
        psdAgreement: {
            type: 'boolean',
            example: true,
        },
        tosAgreement: {
            type: 'boolean',
            example: true,
        }
    },
};

const updateSponsorBody = {
    type: 'object',
    properties: {
        firstname: {
            type: 'string',
            example: 'BLACKROCK',
        },
        lastname: {
            type: 'string',
            example: 'BLACKROCK',
        },
        email: {
            type: 'string',
            example: 'BLACKROCK',
        },
        phone: {
            type: 'string',
            example: 'BLACKROCK',
        },
        state: {
            type: 'string',
            example: 'BLACKROCK',
        },
        country: {
            type: 'string',
            example: 'BLACKROCK',
        },
        address: {
            type: 'string',
            example: 'BLACKROCK',
        },
        password: {
            type: 'string',
            example: 'BLACKROCK',
        },
    },
};

const createSponsor = {
    tags: ['Sponsors'],
    description: 'Create a new sponsor in the system',
    operationId: 'createSponsor',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createSponsorBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Sponsor created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            sponsor_id: {
                                type: 'string',
                                example: '60564fcb544047cdc3844818',
                            },
                            firstname: {
                                type: 'string',
                                example: 'BLACKROCK',
                            },
                            lastname: {
                                type: 'string',
                                example: 'BLACKROCK',
                            },
                            email: {
                                type: 'string',
                                example: 'BLACKROCK',
                            },
                            phone: {
                                type: 'string',
                                example: 'BLACKROCK',
                            },
                            state: {
                                type: 'string',
                                example: 'BLACKROCK',
                            },
                            country: {
                                type: 'string',
                                example: 'BLACKROCK',
                            },
                            address: {
                                type: 'string',
                                example: 'BLACKROCK',
                            },
                            psdAgreement: {
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
        '422': invalidSponsorData,
        '500': internalServerError,
    },
};

const getSponsors = {
    tags: ['Sponsors'],
    description: 'Retrieve all the sponsors',
    operationId: 'getSponsors',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Sponsors retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: sponsorResponse,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

const getSponsor = {
    tags: ['Sponsors'],
    description: 'Retrieve one sponsor',
    operationId: 'getSponsor',
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
            description: 'Sponsor retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: sponsorResponse,
                    },
                },
            },
        },
        '404': sponsorNotFound,
        '500': internalServerError,
    },
};

const updateSponsor = {
    tags: ['Sponsors'],
    description: 'Update a sponsor',
    operationId: 'updateSponsor',
    security,
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Sponsor ID',
            required: true,
            type: 'string',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/updateSponsorBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Sponsor retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: sponsorResponse,
                    },
                },
            },
        },
        '404': sponsorNotFound,
        '422': invalidSponsorData,
        '500': internalServerError,
    },
};

const deleteSponsor = {
    tags: ['Sponsors'],
    description: 'Delete a sponsor',
    operationId: 'deleteSponsor',
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
            description: 'Sponsor deleted successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Sponsor deleted successfully!',
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

export { createSponsor, createSponsorBody, deleteSponsor, getSponsors, getSponsor, updateSponsorBody, updateSponsor };