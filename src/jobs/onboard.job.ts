import cron from 'node-cron';
import { ISponsor, ISponsorDocument } from '../models/sponsor.model';
import { Sponsor } from '../schemas/sponsor.schema';
import { Types } from 'mongoose'

export const onboardingTrialCheck = () => {
  cron.schedule('20 20 2 * * *', async () => {
    console.log(`Checked For onboarding Trials by ${new Date().toISOString()}`);

    const sponsors = await Sponsor.find({ on_trial: true, acctstatus: 'pending' });

    for (let sponsor of sponsors) {
      if (!sponsor.start_trial_ts) {
        sponsor.start_trial_ts = new Date();
        sponsor.end_trial_ts = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 14);

        await sponsor.save();
      } else {
        const now = new Date().getTime();
        const expiryTime = sponsor.end_trial_ts.getTime();


        if (now >= expiryTime && sponsor.hasPaid === false && sponsor.on_trial === true) {
          sponsor.acctstatus = 'suspended';
          await sponsor.save();
        } else continue;
      }
    }
  });
};

