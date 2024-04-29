

const roleResponse = {
    role_id: {
        type: 'string',
        example: '60564fcb544047cdc3844818',
    },
    role_name: {
        type: 'string',
        example: 'Administrateur',
    },
    role_code: {
        type: 'string',
        example: 'ADMIN',
    },
    role_slug: {
        type: 'string',
        example: 'administrateur',
    },
    role_description: {
        type: 'string',
        example: 'this role gives you access to...',
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

const roleNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Role with id: "71675fcb655047cdc4955929" not found',
                    },
                },
            },
        },
    },
};

const invalidRoleData = {
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

const createOrUpdateRoleBody = {
    type: 'object',
    properties: {
        role_name: {
            type: 'string',
            example: 'Administrateur',
        },
        role_code: {
            type: 'string',
            example: 'ADMIN',
        },
        role_slug: {
            type: 'string',
            example: 'administrateur',
        },
        role_description: {
            type: 'string',
            example: 'this role gives you access to...',
        },
        is_active: {
            type: 'boolean',
            example: true,
        }
    },
};

const createRole = {
    tags: ['Roles'],
    description: 'Create a new role in the system',
    operationId: 'createRole',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createOrUpdateRoleBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Role created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: roleResponse,
                    },
                },
            },
        },
        '422': invalidRoleData,
        '500': internalServerError,
    },
};

const getRoles = {
    tags: ['Roles'],
    description: 'Retrieve all the roles',
    operationId: 'getRoles',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Roles retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: roleResponse,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

const getRole = {
    tags: ['Roles'],
    description: 'Retrieve one role',
    operationId: 'getRole',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Role ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Role retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: roleResponse,
                    },
                },
            },
        },
        '404': roleNotFound,
        '500': internalServerError,
    },
};

const updateRole = {
    tags: ['Roles'],
    description: 'Update a role',
    operationId: 'updateRole',
    security,
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Role ID',
            required: true,
            type: 'string',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createOrUpdateRoleBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Role retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: roleResponse,
                    },
                },
            },
        },
        '404': roleNotFound,
        '422': invalidRoleData,
        '500': internalServerError,
    },
};

const deleteRole = {
    tags: ['Roles'],
    description: 'Delete a role',
    operationId: 'deleteRole',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Role ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Role created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Role deleted successfully!',
                            },
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

export { createRole, createOrUpdateRoleBody, deleteRole, getRoles, getRole, updateRole };