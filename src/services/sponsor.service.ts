import SponsorSecurity from '../security/sponsor.security'
import { ISponsor,ISponsorDocument } from '../models/sponsor.model';
import { Sponsor} from '../schemas/sponsor.schema';
import { Types } from 'mongoose'

class SponsorService {

    constructor() {
    }

    public async createSponsorService(sponsor: ISponsor): Promise<ISponsorDocument> {
        try {
            const newSponsor: ISponsorDocument = Sponsor.buildSponsor(sponsor);
            return await newSponsor.save();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`);
        }
    }

    public async listSponsorsService(): Promise<ISponsorDocument[]> {
        try {
            return Sponsor.listSponsors();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }


    public async getSponsorService(sponsor_id: Types.ObjectId): Promise<ISponsorDocument | null> {
        try {
            if (!sponsor_id)
                throw new Error(`Please enter sponsor id`);
            return Sponsor.getSponsor(sponsor_id);
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }

    public async updateSponsorService(sponsor_id: Types.ObjectId, sponsor: ISponsor): Promise<ISponsorDocument | null> {
        try {
            if (!sponsor_id)
                throw new Error(`Please enter sponsor id`);
            return Sponsor.updateSponsor(sponsor_id, sponsor);
        } catch (err: any) {
            throw new Error(`Something went wrong -${err.message}`);
        }
    }

    public async deleteSponsorService(sponsor_id: Types.ObjectId): Promise<ISponsorDocument | null> {
        try {
            if (!sponsor_id)
                throw new Error(`Please enter sponsor id`);
            return Sponsor.deleteSponsor(sponsor_id);
        } catch (err: any) {
            throw new Error(`Something went wrong-${err.message}`);
        }
    }

}

export default SponsorService

