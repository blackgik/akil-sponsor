import { BadRequestError, DuplicateError, ExpectationFailedError } from '../utils/exceptions/http.exception';
import { IBeneficiary, IBeneficiaryDocument } from '../models/beneficiary.model';
import { Beneficiary } from '../schemas/beneficiary.schema';
import { Types } from 'mongoose'

class BeneficiaryService {

    constructor() {
    }

    public async createBeneficiaryService(beneficiary: IBeneficiary): Promise<IBeneficiaryDocument> {
        try {
            if (!beneficiary.firstname)
                throw new ExpectationFailedError(400,`Please enter beneficiary name`,'');
            if (!beneficiary.lastname)
                throw new ExpectationFailedError(400,`Please enter beneficiary lastname`,'');

            const checkIfExist = await Beneficiary.findOne({ $or: [{ email: beneficiary.email }, { phone: beneficiary.phone }] });
            if (checkIfExist) throw new DuplicateError(400,'Beneficiary already exists','');

            const newBeneficiary: IBeneficiaryDocument = Beneficiary.buildBeneficiary(beneficiary);
            return await newBeneficiary.save();
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong - ${err.message}`,'')
        }
    }

    public async listBeneficiarysService(): Promise<IBeneficiaryDocument[]> {
        try {
            return Beneficiary.listBeneficiarys();
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong - ${err.message}`,'')
        }
    }

    public async getBeneficiariesBySponsorService(sponsor_id: Types.ObjectId): Promise<IBeneficiaryDocument[]> {
        try {
            return Beneficiary.find({sponsor_id: sponsor_id});
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong - ${err.message}`,'')
        }
    }


    public async getBeneficiaryService(beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument | null> {
        try {
            if (!beneficiary_id)
                throw new ExpectationFailedError(400,`Please enter beneficiary id`,'');
            return Beneficiary.getBeneficiary(beneficiary_id);
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong - ${err.message}`,'')
        }
    }

    public async updateBeneficiaryService(beneficiary_id: Types.ObjectId, beneficiary: IBeneficiary): Promise<IBeneficiaryDocument | null> {
        try {
            if (!beneficiary_id)
                throw new ExpectationFailedError(400,`Please enter beneficiary id`,'');
            return Beneficiary.updateBeneficiary(beneficiary_id, beneficiary);
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong -${err.message}`,'');
        }
    }

    public async deleteBeneficiaryService(beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument | null> {
        try {
            if (!beneficiary_id)
                throw new ExpectationFailedError(400,`Please enter beneficiary id`,'');
            return Beneficiary.deleteBeneficiary(beneficiary_id);
        } catch (err: any) {
            throw new BadRequestError(400,`Something went wrong-${err.message}`,'');
        }
    }

}

export default BeneficiaryService

