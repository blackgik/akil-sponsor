import { Schema, model, Types, Model } from 'mongoose'
import ConstantNumber from '../constants/number.constant'

export interface ISponsorShip{
    sponsor_id: Types.ObjectId,
    beneficiary_id: Types.ObjectId,
    status: string,
    subject_request: string,
    description: string,
    product_type: string,
    amount: number,
    amount_in_words: string,
    start_date: Date,
    end_date:  Date ,
    document: string
}

export interface ISponsorShipDocument extends ISponsorShip, Document { }

export interface ISponsorShipModel extends Model<ISponsorShipDocument> {
  buildSponsorShip(SponsorShip: ISponsorShip): ISponsorShipDocument
  listSponsorShips(): Promise<ISponsorShipDocument[]>
  getSponsorShip(SponsorShip_id: Types.ObjectId): Promise<ISponsorShipDocument | null>
  updateSponsorShip(SponsorShip_id: Types.ObjectId, SponsorShip: ISponsorShip): Promise<ISponsorShipDocument>
  deleteSponsorShip(SponsorShip_id: Types.ObjectId): Promise<ISponsorShipDocument | null>
}

