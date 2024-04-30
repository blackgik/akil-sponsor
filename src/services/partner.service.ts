import PartnerSecurity from '../security/partner.security'
import { IPartner,IPartnerDocument } from '../models/partner.model';
import { Partner} from '../schemas/partner.schema';
import { Types } from 'mongoose'

class PartnerService {

    constructor() {
    }

    public async createPartnerService(partner: IPartner): Promise<IPartnerDocument> {
        try {
            if (!partner.partner_business_name)
                throw new Error(`Please enter partner name`);
            if (!partner.partner_code)
                throw new Error(`Please enter partner code`);

            const newPartner: IPartnerDocument = Partner.buildPartner(partner);
            return await newPartner.save();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`);
        }
    }

    public async listPartnersService(): Promise<IPartnerDocument[]> {
        try {
            return Partner.listPartners();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }


    public async getPartnerService(partner_id: Types.ObjectId): Promise<IPartnerDocument | null> {
        try {
            if (!partner_id)
                throw new Error(`Please enter partner id`);
            return Partner.getPartner(partner_id);
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }

    public async updatePartnerService(partner_id: Types.ObjectId, partner: IPartner): Promise<IPartnerDocument | null> {
        try {
            if (!partner_id)
                throw new Error(`Please enter partner id`);
            return Partner.updatePartner(partner_id, partner);
        } catch (err: any) {
            throw new Error(`Something went wrong -${err.message}`);
        }
    }

    public async deletePartnerService(partner_id: Types.ObjectId): Promise<IPartnerDocument | null> {
        try {
            if (!partner_id)
                throw new Error(`Please enter partner id`);
            return Partner.deletePartner(partner_id);
        } catch (err: any) {
            throw new Error(`Something went wrong-${err.message}`);
        }
    }

}

export default PartnerService

