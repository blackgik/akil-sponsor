const productResponseWithProduct_category = {
    product_id: {
        type: 'string',
        example: '60564fcb544047cdc3844818',
    },
    product_category: {
        type: 'object',
        properties: {
            category_name: {
                type: 'string',
                example: 'Health',
            },
            subscription_category: {
                type: 'string',
                example: 'Health',
            },
            subscription_sector: {
                type: 'string',
                example: 'HEALTH',
            },
            category_description: {
                type: 'string',
                example: 'this product_category gives you access to...',
            },
        },
    },
    general_information: {
        type: 'object',
        properties: {
            product_name: {
                type: 'string',
                example: 'RAS',
            },
            product_code: {
                type: 'string',
                example: 'PDT0012',
            },
            product_slug: {
                type: 'string',
                example: 'ras',
            },
            product_description: {
                type: 'string',
                example: 'this product_category gives you access to...',
            },
            product_partner_id: {
                type: 'string',
                example: '605636683f6e29c81c8b2db0',
            },
            product_image: {
                type: 'string',
                example: 'http://imagebank.test/alt.png',
            },
            is_active: {
                type: 'boolean',
                example: true,
            },
        },
    },
    subscription_settings: {
        type: 'object',
        properties: {
            category_price: {
                type: 'number',
                example: 1200,
            },
            frequency: {
                type: 'number',
                example: 3,
            },
            discount: {
                type: 'number',
                example: 0,
            },
            discount_code: {
                type: 'string',
                example: 'CM00235',
            },
            discount_start_date: {
                type: 'string',
                example: '2021-03-20T21:23:10.879Z',
            },
            discount_end_date: {
                type: 'string',
                example: '2021-03-20T21:23:10.879Z',
            },
            enable_direct_debit: {
                type: 'boolean',
                example: true,
            },
        },
    },
    product_partner_id: {
        type: 'string',
        example: '605636683f6e29c81c8b2db0',
    },
    category: {
        type: 'object',
        properties: {
            product_category_id: {
                type: 'string',
                example: '60564fcb544047cdc3844818',
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
                example: '60564fcb544047cdc3844818',
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
                example: '2021-03-19T09:51:01.506Z',
            },
            updatedAt: {
                type: 'string',
                example: '2021-03-19T11:48:25.980Z',
            },
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

const productNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Product with id: "71675fcb655047cdc4955929" not found',
                    },
                },
            },
        },
    },
};

const invalidProductData = {
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

const createProductBody = {
    type: 'object',
    properties: {
        product_category: {
            type: 'object',
            properties: {
                category_name: {
                    type: 'string',
                    example: 'Health',
                },
                subscription_category: {
                    type: 'string',
                    example: 'Health',
                },
                subscription_sector: {
                    type: 'string',
                    example: 'HEALTH',
                },
                category_description: {
                    type: 'string',
                    example: 'this product_category gives you access to...',
                },
            },
        },
        general_information: {
            type: 'object',
            properties: {
                product_name: {
                    type: 'string',
                    example: 'RAS',
                },
                product_slug: {
                    type: 'string',
                    example: 'ras',
                },
                product_code: {
                    type: 'string',
                    example: 'ras',
                },
                product_description: {
                    type: 'string',
                    example: 'this product_category gives you access to...',
                },
            },
        },
        subscription_settings: {
            type: 'object',
            properties: {
                category_price: {
                    type: 'number',
                    example: 1200,
                },
                frequency: {
                    type: 'number',
                    example: 3,
                },
                discount: {
                    type: 'number',
                    example: 0,
                },
                discount_code: {
                    type: 'string',
                    example: 'CM00235',
                },
                discount_start_date: {
                    type: 'string',
                    example: '2021-03-20T21:23:10.879Z',
                },
                discount_end_date: {
                    type: 'string',
                    example: '2021-03-20T21:23:10.879Z',
                },
                enable_direct_debit: {
                    type: 'boolean',
                    example: true,
                },
            },
            product_partner_id: {
                type: 'string',
                example: '605636683f6e29c81c8b2db0',
            },
        },
    },
};

const updateProductBody = {
    type: 'object',
    properties: {
        product_category: {
            type: 'object',
            properties: {
                category_name: {
                    type: 'string',
                    example: 'Health',
                },
                subscription_category: {
                    type: 'string',
                    example: 'Health',
                },
                subscription_sector: {
                    type: 'string',
                    example: 'HEALTH',
                },
                category_description: {
                    type: 'string',
                    example: 'this product_category gives you access to...',
                },
            },
        },
        general_information: {
            type: 'object',
            properties: {
                product_name: {
                    type: 'string',
                    example: 'RAS',
                },
                product_code: {
                    type: 'string',
                    example: 'PDT0012',
                },
                product_slug: {
                    type: 'string',
                    example: 'ras',
                },
                product_description: {
                    type: 'string',
                    example: 'this product_category gives you access to...',
                },
                product_partner_id: {
                    type: 'string',
                    example: '605636683f6e29c81c8b2db0',
                },
                product_image: {
                    type: 'string',
                    example: 'http://imagebank.test/alt.png',
                },
                is_active: {
                    type: 'boolean',
                    example: true,
                },
            },
        },
        subscription_settings: {
            type: 'object',
            properties: {
                category_price: {
                    type: 'number',
                    example: 1200,
                },
                frequency: {
                    type: 'number',
                    example: 3,
                },
                discount: {
                    type: 'number',
                    example: 0,
                },
                discount_code: {
                    type: 'string',
                    example: 'CM00235',
                },
                discount_start_date: {
                    type: 'string',
                    example: '2021-03-20T21:23:10.879Z',
                },
                discount_end_date: {
                    type: 'string',
                    example: '2021-03-20T21:23:10.879Z',
                },
                enable_direct_debit: {
                    type: 'boolean',
                    example: true,
                },
            },
            product_partner_id: {
                type: 'string',
                example: '605636683f6e29c81c8b2db0',
            },
        },
    },
};

const createProduct = {
    tags: ['Products'],
    description: 'Create a new product in the system',
    operationId: 'createProduct',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createProductBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Product created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            product_id: {
                                type: 'string',
                                example: '60564fcb544047cdc3844818',
                            },
                            product_category: {
                                type: 'object',
                                properties: {
                                    category_name: {
                                        type: 'string',
                                        example: 'Health',
                                    },
                                    subscription_category: {
                                        type: 'string',
                                        example: 'Health',
                                    },
                                    subscription_sector: {
                                        type: 'string',
                                        example: 'HEALTH',
                                    },
                                    category_description: {
                                        type: 'string',
                                        example: 'this product_category gives you access to...',
                                    },
                                },
                            },
                            general_information: {
                                type: 'object',
                                properties: {
                                    product_name: {
                                        type: 'string',
                                        example: 'RAS',
                                    },
                                    product_code: {
                                        type: 'string',
                                        example: 'PDT0012',
                                    },
                                    product_slug: {
                                        type: 'string',
                                        example: 'ras',
                                    },
                                    product_description: {
                                        type: 'string',
                                        example: 'this product_category gives you access to...',
                                    },
                                    product_partner_id: {
                                        type: 'string',
                                        example: '605636683f6e29c81c8b2db0',
                                    },
                                    product_image: {
                                        type: 'string',
                                        example: 'http://imagebank.test/alt.png',
                                    },
                                    is_active: {
                                        type: 'boolean',
                                        example: true,
                                    },
                                },
                            },
                            subscription_settings: {
                                type: 'object',
                                properties: {
                                    category_price: {
                                        type: 'number',
                                        example: 1200,
                                    },
                                    frequency: {
                                        type: 'number',
                                        example: 3,
                                    },
                                    discount: {
                                        type: 'number',
                                        example: 0,
                                    },
                                    discount_code: {
                                        type: 'string',
                                        example: 'CM00235',
                                    },
                                    discount_start_date: {
                                        type: 'string',
                                        example: '2021-03-20T21:23:10.879Z',
                                    },
                                    discount_end_date: {
                                        type: 'string',
                                        example: '2021-03-20T21:23:10.879Z',
                                    },
                                    enable_direct_debit: {
                                        type: 'boolean',
                                        example: true,
                                    },
                                },
                            },
                            product_partner_id: {
                                type: 'string',
                                example: '605636683f6e29c81c8b2db0',
                            },
                            category: {
                                type: 'object',
                                properties: {
                                    product_category_id: {
                                        type: 'string',
                                        example: '60564fcb544047cdc3844818',
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
                                        example: '60564fcb544047cdc3844818',
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
                                        example: '2021-03-19T09:51:01.506Z',
                                    },
                                    updatedAt: {
                                        type: 'string',
                                        example: '2021-03-19T11:48:25.980Z',
                                    },
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
        '422': invalidProductData,
        '500': internalServerError,
    },
};

const getProducts = {
    tags: ['Products'],
    description: 'Retrieve all the products',
    operationId: 'getProducts',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Products retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: productResponseWithProduct_category,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

const getProduct = {
    tags: ['Products'],
    description: 'Retrieve one product',
    operationId: 'getProduct',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Product ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Product retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: productResponseWithProduct_category,
                    },
                },
            },
        },
        '404': productNotFound,
        '500': internalServerError,
    },
};

const updateProduct = {
    tags: ['Products'],
    description: 'Update a product',
    operationId: 'updateProduct',
    security,
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Product ID',
            required: true,
            type: 'string',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/updateProductBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Product retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: productResponseWithProduct_category,
                    },
                },
            },
        },
        '404': productNotFound,
        '422': invalidProductData,
        '500': internalServerError,
    },
};

const deleteProduct = {
    tags: ['Products'],
    description: 'Delete a product',
    operationId: 'deleteProduct',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Product ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Product deleted successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Product deleted successfully!',
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

export { createProduct, createProductBody, deleteProduct, getProducts, getProduct, updateProductBody, updateProduct };