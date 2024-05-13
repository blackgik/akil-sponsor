import cron from 'node-cron';
import organizationModel from '../models/organizationModel.js';

export const onboardingTrialCheck = () => {
  cron.schedule('20 20 2 * * *', async () => {
    console.log(`Checked For onboarding Trials by ${new Date().toISOString()}`);

    const organizations = await organizationModel.find({ on_trial: true, acctstatus: 'pending' });

    for (let org of organizations) {
      if (!org.start_trial_ts) {
        org.start_trial_ts = new Date();
        org.end_trial_ts = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 14);

        await org.save();
      } else {
        const now = new Date().getTime();
        const expiryTime = org.end_trial_ts.getTime();

        if ((org.payment_plan === 'third_party_api')) continue;

        if (now >= expiryTime && org.hasPaid === false && org.on_trial === true) {
          org.acctstatus = 'suspended';
          await org.save();
        } else continue;
      }
    }
  });
};

export const monthlyactivationCheck = () => {
  cron.schedule('10 10 2 * * *', async () => {
    console.log(`Checked For monthly activations by ${new Date().toISOString()}`);

    const organizations = await organizationModel.find({ acctstatus: 'active' });

    for (let org of organizations) {
      if (org.payment_plan === 'third_party_api') continue;

      const now = new Date().getTime();
      const expiryTime = org.end_trial_ts.getTime();

      if (now >= expiryTime) {
        org.acctstatus = 'suspended';

        await org.save();
      } else continue;
    }
  });
};
