

const product_categoryResponse = {
    product_category_id: {
        type: 'string',
        example: '60564fcb542017cdc3844818',
    },
    product_category_name: {
        type: 'string',
        example: 'Administrateur',
    },
    product_category_slug: {
        type: 'string',
        example: 'administrateur',
    },
    parent_category_id: {
        type: 'string',
        example: '60564fcb542017cdc3844818',
    },
    product_category_description: {
        type: 'string',
        example: 'this product_category gives you access to...',
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

const product_categoryNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Product_category with id: "71675fcb655047cdc4955929" not found',
                    },
                },
            },
        },
    },
};

const invalidProduct_categoryData = {
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

const createOrUpdateProduct_categoryBody = {
    type: 'object',
    properties: {
        product_category_name: {
            type: 'string',
            example: 'Administrateur',
        },
        product_category_slug: {
            type: 'string',
            example: 'administrateur',
        },
        parent_category_id: {
            type: 'string',
            example: '60564fcb542017cdc3844818',
        },
        product_category_description: {
            type: 'string',
            example: 'this product_category gives you access to...',
        },
        is_active: {
            type: 'boolean',
            example: true,
        }
    },
};

const createProduct_category = {
    tags: ['Product-categories'],
    description: 'Create a new product_category in the system',
    operationId: 'createProduct_category',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createOrUpdateProduct_categoryBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Product_category created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: product_categoryResponse,
                    },
                },
            },
        },
        '422': invalidProduct_categoryData,
        '500': internalServerError,
    },
};

const getProduct_categories = {
    tags: ['Product-categories'],
    description: 'Retrieve all the product_categorys',
    operationId: 'getProduct_categories',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Product_categories retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: product_categoryResponse,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

const getProduct_category = {
    tags: ['Product-categories'],
    description: 'Retrieve one product_category',
    operationId: 'getProduct_category',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Product_category ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Product_category retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: product_categoryResponse,
                    },
                },
            },
        },
        '201': product_categoryNotFound,
        '500': internalServerError,
    },
};

const updateProduct_category = {
    tags: ['Product-categories'],
    description: 'Update a product_category',
    operationId: 'updateProduct_category',
    security,
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Product_category ID',
            required: true,
            type: 'string',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createOrUpdateProduct_categoryBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Product_category retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: product_categoryResponse,
                    },
                },
            },
        },
        '201': product_categoryNotFound,
        '422': invalidProduct_categoryData,
        '500': internalServerError,
    },
};

const deleteProduct_category = {
    tags: ['Product-categories'],
    description: 'Delete a product_category',
    operationId: 'deleteProduct_category',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Product_category ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Product_category created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Product_category deleted successfully!',
                            },
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

export { createProduct_category, createOrUpdateProduct_categoryBody, deleteProduct_category, getProduct_categories, getProduct_category, updateProduct_category };