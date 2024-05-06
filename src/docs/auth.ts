

const loginResponse = {
    access_token: {
        type: 'string',
        example: '60564fcb542017cdc3844818',
    },
    refresh_token: {
        type: 'string',
        example: '60564fcb542017cdc3844818',
    },
};

const otpResponse = {
    access_token: {
        type: 'string',
        example: '60564fcb542017cdc3844818',
    },
    refresh_token: {
        type: 'string',
        example: '60564fcb542017cdc3844818',
    },
};

const sendOtpBody = {
    emal: {
        type: 'string',
        example: 'test@gmail.com',
    }
};

const sponsorOnbordingResponse = {
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
    role: {
        type: 'string',
        example: 'BLACKROCK',
    },
    tosAgreement: {
        type: 'boolean',
        example: true,
    },
    pdsAgreement: {
        type: 'boolean',
        example: true,
    },
};

const preferenceResponse = {
    occupations: [
        {
            occupation_id: {
                type: 'string',
                example: '60564fcb542017cdc3844818',
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
        }
    ],
    categories: [
        {
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
        }
    ]
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

const UserNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'User with email: "71675fcb655047cdc4955929" not found',
                    },
                },
            },
        },
    },
};

const invalidEmailOrPasswordData = {
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

const onboardSponsorBody = {
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
        tosAgreement: {
            type: 'boolean',
            example: true,
        },
        pdsAgreement: {
            type: 'boolean',
            example: true,
        },
    },
};

const loginBody = {
    type: 'object',
    properties: {
        email: {
            type: 'string',
            example: 'test@test.com',
        },
        password: {
            type: 'string',
            example: 'Agjkbaehhlfahuhlkmaj',
        },
    },
};

const verifyOtpBody = {
    type: 'object',
    properties: {
        code: {
            type: 'number',
            example: 123456,
        },
        hash: {
            type: 'string',
            example: 'Agjkbaehhlfahuhlkmaj',
        },
    },
};

const login = {
    tags: ['Authentication'],
    description: 'Authenticate',
    operationId: 'login',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/loginBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Authenticated successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: loginResponse,
                    },
                },
            },
        },
        '422': invalidEmailOrPasswordData,
        '500': internalServerError,
    },
};

const listePreferences = {
    tags: ['Authentication'],
    description: 'Retrieve all the preferences',
    operationId: 'listePreferences',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'preferences retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: preferenceResponse,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};


const verifyOtp = {
    tags: ['Authentication'],
    description: 'verify mail',
    operationId: 'verifyOtp',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/verifyOtpBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Mail address verified successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: otpResponse,
                    },
                },
            },
        },
        '422': invalidEmailOrPasswordData,
        '500': internalServerError,
    },
};


const resendOtp = {
    tags: ['Authentication'],
    description: 'verify mail',
    operationId: 'resendOtp',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/sendOtpBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Otp sent successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: otpResponse,
                    },
                },
            },
        },
        '422': invalidEmailOrPasswordData,
        '500': internalServerError,
    },
};

const forgotPwd = {
    tags: ['Authentication'],
    description: 'verify mail',
    operationId: 'forgotPwd',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/sendOtpBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Otp sent successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: otpResponse,
                    },
                },
            },
        },
        '422': invalidEmailOrPasswordData,
        '500': internalServerError,
    },
};

const resetPwd = {
    tags: ['Authentication'],
    description: 'verify mail',
    operationId: 'resetPwd',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/verifyOtpBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Password reset successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: otpResponse,
                    },
                },
            },
        },
        '422': invalidEmailOrPasswordData,
        '500': internalServerError,
    },
};


const onboardSponsor = {
    tags: ['Authentication'],
    description: 'Onboard a sponsor',
    operationId: 'onboardSponsor',
    security,
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/onboardSponsorBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Sponsor Onboarded successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: sponsorOnbordingResponse,
                    },
                },
            },
        },
        '201': sponsorNotFound,
        '422': invalidSponsorData,
        '500': internalServerError,
    },
};


export { login, loginBody, listePreferences, verifyOtp, resendOtp, sendOtpBody, forgotPwd, resetPwd, verifyOtpBody, onboardSponsor, onboardSponsorBody };