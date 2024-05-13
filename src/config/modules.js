export const plans = {
  basic: {
    modules: ['membership', 'contribution', 'loan', 'savings', 'withdrawal', 'agent management'],
    base_pay: 50,
    max_users: 1000,
    total_admin: 2,
    email_notifications: 'limited'
  },
  standard: {
    modules: [
      'membership',
      'contribution',
      'loan',
      'savings',
      'withdrawal',
      'agent management',
      'accounting',
      'subscription',
      'investment',
      'dividend',
      'mobile_app'
    ],
    base_pay: 45,
    max_users: 5000,
    total_admin: 5,
    email_notifications: 'limited'
  },
  premium: {
    modules: [
      'membership',
      'contribution',
      'loan',
      'savings',
      'withdrawal',
      'agent management',
      'accounting',
      'subscription',
      'investment',
      'dividend',
      'health',
      'marketplace'
    ],
    base_pay: 35,
    max_users: 7500,
    total_admin: 10,
    email_notifications: 'unlimited'
  },
  ultimate: {
    modules: [
      'membership',
      'contribution',
      'loan',
      'savings',
      'withdrawal',
      'agent management',
      'accounting',
      'subscription',
      'investment',
      'dividend',
      'health',
      'marketplace'
    ],
    base_pay: 25,
    max_users: Infinity,
    total_admin: 10,
    email_notifications: 'unlimited'
  },
  third_party_api: {
    modules: [],
    base_pay: 99000,
    max_users: Infinity,
    total_admin: 10,
    email_notifications: 'unlimited'
  }
};
