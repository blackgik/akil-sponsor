import { Document, Model, Types} from 'mongoose'

export interface IPartner{
    partner_business_name: string,
    partner_admin_name: string,
    partner_code: string,
    partner_slug: string,
    partner_language: string,
    partner_sector: string,
    partner_phone: string,
    partner_avatar?: string
    partner_email?: string,
    partner_website?: string,
    partner_location?: {
      latitude: string,
      longitude: string,
    },
    partner_address?: string,
    isApproved: boolean,
    tosAgreement: boolean,
    acctstatus: string,    
    on_trial: Boolean,
    start_trial_ts: Date,
    end_trial_ts: Date,
    hasPaid: Boolean
}

export interface IPartnerDocument extends IPartner, Document{}

export interface IPartnerModel extends Model<IPartnerDocument>{
    buildPartner(partner: IPartner):IPartnerDocument
    listPartners():Promise<IPartnerDocument[]>
    getPartner(partner_id: Types.ObjectId):Promise<IPartnerDocument | null>
    updatePartner(partner_id: Types.ObjectId, partner: IPartner):Promise<IPartnerDocument>
    deletePartner(partner_id: Types.ObjectId):Promise<IPartnerDocument | null>
}
