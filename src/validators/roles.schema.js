import Joi from 'joi';

export const rolesCretionSchema = Joi.object({
  role_name: Joi.string().required(),
  authorization: Joi.object({
    beneficiary: Joi.object({
      is_active: Joi.boolean().required(),
      functions: Joi.object({
        add_beneficiary: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        suspend_beneficiary: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        restore_beneficiary: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        approve_beneficiary: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        bulk_upload_beneficiary: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        invite_beneficiary: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({})
      })
        .optional()
        .allow({})
    })
      .optional()
      .allow({}),

    projects: Joi.object({
      is_active: Joi.boolean().required(),
      functions: Joi.object({
        create_product: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        award_beneficiary: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        scheduling: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        disbursement: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        approve_request: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        request_renewal: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({})
      })
        .optional()
        .allow({})
    })
      .optional()
      .allow({}),
    product: Joi.object({
      is_active: Joi.boolean().required(),
      functions: Joi.object({
        product: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        replenishment: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        supplier: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        warehouse: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({})
      })
        .optional()
        .allow({})
    })
      .optional()
      .allow({}),
    sponsorship: Joi.object({
      is_active: Joi.boolean().required(),
      functions: Joi.object({
        request: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        renewal: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        disbursement: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        approval: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        feedback: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({})
      })
        .optional()
        .allow({})
    })
      .optional()
      .allow({}),
    payment: Joi.object({
      is_active: Joi.boolean().required(),
      functions: Joi.object({
        my_subscription: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        approval: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        deposit_funds: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        
      })
        .optional()
        .allow({})
    })
      .optional()
      .allow({}),
    communication: Joi.object({
      is_active: Joi.boolean().required(),
      functions: Joi.object({
        testimonial: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        chat: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        media: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        notifications: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        approval: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        publish: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({})
      })
        .optional()
        .allow({})
    })
      .optional()
      .allow({}),
    settings: Joi.object({
      is_active: Joi.boolean().required(),
      functions: Joi.object({
        users: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        profile: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        personalisation: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        genral_settings: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        roles_permission: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({}),
        bank: Joi.object({
          is_active: Joi.boolean().required(),
          permissions: Joi.array().items(Joi.string().valid('create', 'delete', 'edit', 'view'))
        })
          .optional()
          .allow({})
      })
        .optional()
        .allow({})
    })
      .optional()
      .allow({})
  })
});
