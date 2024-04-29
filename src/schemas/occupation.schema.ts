import { Schema, model, Types } from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { IOccupation, IOccupationDocument, IOccupationModel } from '../models/occupation.model';

const OccupationSchema = new Schema({
    occupation_name: {
        type: String,
        required: true
    },
    occupation_code: {
        type: String,
        required: true
    },
    occupation_slug: {
        type: String,
        required: false
    },
    occupation_description: {
        type: String,
        required: false
    },
    is_active: {
        type: Boolean,
        default: true,
        required: false
    }
}, {
    collection: 'occupations',
    timestamps: true,
});

OccupationSchema.statics.buildOccupation = (occupation: IOccupation): IOccupationDocument => {
    return new Occupation(occupation)
}

OccupationSchema.statics.listOccupations = async (): Promise<IOccupationDocument[]> => {
    return await Occupation.find();
}
OccupationSchema.statics.getOccupation = async (occupation_id: Types.ObjectId): Promise<IOccupationDocument | null> => {
    return await Occupation.findById(occupation_id)
}

OccupationSchema.statics.updateOccupation = async (occupation_id: Types.ObjectId, occupation: IOccupation): Promise<IOccupationDocument | null> => {
    return await Occupation.findByIdAndUpdate(occupation_id, occupation);
}

OccupationSchema.statics.deleteOccupation = async (occupation_id: Types.ObjectId): Promise<IOccupationDocument | null> => {
    return await Occupation.findByIdAndDelete(occupation_id);
}

const Occupation = model<IOccupationDocument, IOccupationModel>('occupations', OccupationSchema);

export {
    Occupation
}