import { Schema, model, Types } from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { ISponsorShip, ISponsorShipDocument, ISponsorShipModel } from '../models/sponsorship.model';

const SponsorShipSchema = new Schema({
    sponsor_id: { type: Schema.Types.ObjectId, ref: 'sponsors' },
    beneficiary_id: { type: Schema.Types.ObjectId, required: true, ref: 'beneficiaries' },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected', 'completed', 'eligible', 'ineligible', 'paid'],
      default: 'eligible'
    },
    subject_request: { type: String, default: '' },
    description: { type: String, default: '' },
    product_type: { type: Schema.Types.ObjectId, ref: 'product_categories' },
    amount: { type: Number },
    amount_in_words: { type: String },
    start_date: { type: Date },
    end_date: { type: Date },
    document: { type: String }

}, {
  collection: 'sponsorShips',
  timestamps: true,
});

SponsorShipSchema.statics.buildSponsorShip = (sponsorShip: ISponsorShip): ISponsorShipDocument => {
  return new SponsorShip(sponsorShip)
}

SponsorShipSchema.statics.listSponsorShips = async (): Promise<ISponsorShipDocument[]> => {
  return await SponsorShip.find();
}
SponsorShipSchema.statics.getSponsorShip = async (sponsorShip_id: Types.ObjectId): Promise<ISponsorShipDocument | null> => {
  return await SponsorShip.findById(sponsorShip_id)
}

SponsorShipSchema.statics.updateSponsorShip = async (sponsorShip_id: Types.ObjectId, sponsorShip: ISponsorShip): Promise<ISponsorShipDocument | null> => {
  return await SponsorShip.findByIdAndUpdate(sponsorShip_id, sponsorShip);
}

SponsorShipSchema.statics.deleteSponsorShip = async (sponsorShip_id: Types.ObjectId): Promise<ISponsorShipDocument | null> => {
  return await SponsorShip.findByIdAndDelete(sponsorShip_id);
}

const SponsorShip = model<ISponsorShipDocument, ISponsorShipModel>('sponsorShips', SponsorShipSchema);


export {
  SponsorShip
}
