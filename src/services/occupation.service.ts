import { BadRequestError, DuplicateError, ExpectationFailedError } from '../utils/exceptions/http.exception';
import { IOccupation, IOccupationDocument } from '../models/occupation.model';
import { Occupation } from '../schemas/occupation.schema';
import { Types } from 'mongoose'

class OccupationService {

    constructor() {
    }

    public async createOccupationService(occupation: IOccupation): Promise<IOccupationDocument> {
        try {
            if (!occupation.occupation_name)
                throw new ExpectationFailedError(400,`Please enter occupation name`,'');
            if (!occupation.occupation_code)
                throw new ExpectationFailedError(400,`Please enter occupation code`,'');

            const checkIfExist = await Occupation.findOne({ occupation_code: occupation.occupation_code });
            if (checkIfExist) throw new DuplicateError(400,'Occupation already exists','');

            const newOccupation: IOccupationDocument = Occupation.buildOccupation(occupation);
            return await newOccupation.save();
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong - ${err.message}`,'');
        }
    }

    public async listOccupationsService(): Promise<IOccupationDocument[]> {
        try {
            return Occupation.listOccupations();
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong - ${err.message}`,'')
        }
    }


    public async getOccupationService(occupation_id: Types.ObjectId): Promise<IOccupationDocument | null> {
        try {
            if (!occupation_id)
                throw new ExpectationFailedError(400,`Please enter occupation id`,'');
            return Occupation.getOccupation(occupation_id);
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong - ${err.message}`,'')
        }
    }

    public async updateOccupationService(occupation_id: Types.ObjectId, occupation: IOccupation): Promise<IOccupationDocument | null> {
        try {
            if (!occupation_id)
                throw new ExpectationFailedError(400,`Please enter occupation id`,'');
            return Occupation.updateOccupation(occupation_id, occupation);
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong -${err.message}`,'');
        }
    }

    public async deleteOccupationService(occupation_id: Types.ObjectId): Promise<IOccupationDocument | null> {
        try {
            if (!occupation_id)
                throw new ExpectationFailedError(400,`Please enter occupation id`,'');
            return Occupation.deleteOccupation(occupation_id);
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong-${err.message}`,'');
        }
    }

}

export default OccupationService

