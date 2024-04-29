

const occupationResponse = {
    occupation_id: {
        type: 'string',
        example: '60564fcb544047cdc3844818',
    },
    occupation_name: {
        type: 'string',
        example: 'Administrateur',
    },
    occupation_code: {
        type: 'string',
        example: 'ADMIN',
    },
    occupation_slug: {
        type: 'string',
        example: 'administrateur',
    },
    occupation_description: {
        type: 'string',
        example: 'this occupation gives you access to...',
    },
    is_active: {
        type: 'boolean',
        example: true,
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

const occupationNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Occupation with id: "71675fcb655047cdc4955929" not found',
                    },
                },
            },
        },
    },
};

const invalidOccupationData = {
    description: 'Invalid Data provided',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'The fields name and description are required',
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

const createOrUpdateOccupationBody = {
    type: 'object',
    properties: {
        occupation_name: {
            type: 'string',
            example: 'Administrateur',
        },
        occupation_code: {
            type: 'string',
            example: 'ADMIN',
        },
        occupation_slug: {
            type: 'string',
            example: 'administrateur',
        },
        occupation_description: {
            type: 'string',
            example: 'this occupation gives you access to...',
        },
        is_active: {
            type: 'boolean',
            example: true,
        }
    },
};

const createOccupation = {
    tags: ['Occupations'],
    description: 'Create a new occupation in the system',
    operationId: 'createOccupation',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createOrUpdateOccupationBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Occupation created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: occupationResponse,
                    },
                },
            },
        },
        '422': invalidOccupationData,
        '500': internalServerError,
    },
};

const getOccupations = {
    tags: ['Occupations'],
    description: 'Retrieve all the occupations',
    operationId: 'getOccupations',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Occupations retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: occupationResponse,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

const getOccupation = {
    tags: ['Occupations'],
    description: 'Retrieve one occupation',
    operationId: 'getOccupation',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Occupation ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Occupation retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: occupationResponse,
                    },
                },
            },
        },
        '404': occupationNotFound,
        '500': internalServerError,
    },
};

const updateOccupation = {
    tags: ['Occupations'],
    description: 'Update a occupation',
    operationId: 'updateOccupation',
    security,
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Occupation ID',
            required: true,
            type: 'string',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createOrUpdateOccupationBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Occupation retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: occupationResponse,
                    },
                },
            },
        },
        '404': occupationNotFound,
        '422': invalidOccupationData,
        '500': internalServerError,
    },
};

const deleteOccupation = {
    tags: ['Occupations'],
    description: 'Delete a occupation',
    operationId: 'deleteOccupation',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Occupation ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Occupation created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Occupation deleted successfully!',
                            },
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

export { createOccupation, createOrUpdateOccupationBody, deleteOccupation, getOccupations, getOccupation, updateOccupation };