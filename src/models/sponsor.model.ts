import { Document, Model, Types } from 'mongoose'

export interface ISponsor {
    firstname: string,
    lastname: string,
    avatar: string,
    email: string,
    phone: string,
    state: string,
    country: string,
    address: string,
    password: string,
    dob: string,
    email_verified: boolean,
    acctstatus: string,
    otpHash: string,
    kyc_status: string,
    kyc_docs: {
        bank_details: {
            bvn: string,
            acct_number: string,
            acct_name: string,
            bank_name: string,
            acct_type: string,
            bank_code: string,
            bvn_verified: boolean
        },
        identitifications: {
            id_type: string,
            id_card: string,
            utility_bill: string
        },
        customer_code: String //gotten from paystack.com or in the future any platform we support.
    },
    language: string,
    on_trial: Boolean,
    start_trial_ts: Date,
    end_trial_ts: Date,
    hasPaid: boolean,
    tosAgreement: boolean,
    psdAgreement: boolean,
}

export interface ISponsorDocument extends ISponsor, Document { }

export interface ISponsorModel extends Model<ISponsorDocument> {
    buildSponsor(sponsor: ISponsor): ISponsorDocument
    listSponsors(): Promise<ISponsorDocument[]>
    getSponsor(sponsor_id: Types.ObjectId): Promise<ISponsorDocument | null>
    updateSponsor(sponsor_id: Types.ObjectId, sponsor: ISponsor): Promise<ISponsorDocument>
    deleteSponsor(sponsor_id: Types.ObjectId): Promise<ISponsorDocument | null>
}
