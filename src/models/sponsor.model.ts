import { Document, Model, Types} from 'mongoose'

export interface ISponsor{
    name: string,
    firtsname: string,
    lastname: string,
    slug: string,
    language: string,
    on_trial: Boolean,
    start_trial_ts: Date,
    end_trial_ts: Date,
    hasPaid: Boolean,
    tosAgreement: string,
    phone: number,
    avatar?: string
    email?: string,
    address?: string,
    isApproved: boolean,
    acctstatus: string,
    is_active: boolean
}

export interface ISponsorDocument extends ISponsor, Document{}

export interface ISponsorModel extends Model<ISponsorDocument>{
    buildSponsor(sponsor: ISponsor):ISponsorDocument
    listSponsors():Promise<ISponsorDocument[]>
    getSponsor(sponsor_id: Types.ObjectId):Promise<ISponsorDocument | null>
    updateSponsor(sponsor_id: Types.ObjectId, sponsor: ISponsor):Promise<ISponsorDocument>
    deleteSponsor(sponsor_id: Types.ObjectId):Promise<ISponsorDocument | null>
}
