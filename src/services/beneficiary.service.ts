import { BadRequestError, DuplicateError, ExpectationFailedError, InternalServerError } from '../utils/exceptions/http.exception';
import { IBeneficiary, IBeneficiaryDocument } from '../models/beneficiary.model';
import XLSX from 'xlsx';
import { Beneficiary } from '../schemas/beneficiary.schema';
import { Types } from 'mongoose'
import {
    buildOtpHash,
    codeGenerator,
    generateEnterpriseCredentials,
    verifyOTP
} from "../utils/code.generator";
import { messageBird } from "../utils/mail.sender";
import { memberBulkUpload, onboardinMail, verifyOnbordingMail } from "../utils/mail.data";
import { BeneficiaryBatch } from '../schemas/beneficiary.batch.schema';
import { formattMailInfo } from '../utils/mail.formatter';
import customConfig from '../config/default';

class BeneficiaryService {

    constructor() {
    }

    public async createBeneficiaryService(beneficiary: IBeneficiary): Promise<IBeneficiaryDocument> {
        try {
            if (!beneficiary.firstname)
                throw new ExpectationFailedError(400, `Please enter beneficiary name`, '');
            if (!beneficiary.lastname)
                throw new ExpectationFailedError(400, `Please enter beneficiary lastname`, '');

            const checkIfExist = await Beneficiary.findOne({ $or: [{ email: beneficiary.email }, { phone: beneficiary.phone }] });
            if (checkIfExist) throw new DuplicateError(400, 'Beneficiary already exists', '');

            const newBeneficiary: IBeneficiaryDocument = Beneficiary.buildBeneficiary(beneficiary);
            return await newBeneficiary.save();
        } catch (err: any) {
            throw new BadRequestError(400, `Something went wrong - ${err.message}`, '')
        }
    }

    // public async uploadSPonsorMembersInBulk({ user, file, body }) {
    //     if (!body.batch_no) throw new BadRequestError(400,'Please this upload requires a batch number','');

    //     const workbook = XLSX.readFile(file.path);
    //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    //     const header = [
    //         'name',
    //         'gender',
    //         'marital_status',
    //         'nationality',
    //         'state_of_origin',
    //         'language',
    //         'lga',
    //         'country_of_residence',
    //         'state_of_residence',
    //         'resident_address',
    //         'city_of_residence',
    //         'phone',
    //         'email',
    //         'bank_name',
    //         'acct_name',
    //         'bank_code',
    //         'acct_number',
    //         'has_paid'
    //     ];

    //     let result = XLSX.utils.sheet_to_json(worksheet, {
    //         header,
    //         raw: true
    //     });

    //     result = result.slice(1);

    //     let batchList = [];

    //     for (let member of result) {
    //         let comment;
    //         // check if email address is already available
    //         const memberExists = await Beneficiary.findOne({
    //             email: member.email,
    //             sponsor_id: user._id
    //         });

    //         comment = memberExists ? 'Member already belongs to a sponsor' : 'available';

    //         const batchExist = await BeneficiaryBatch.findOne({
    //             email: member.email,
    //             sponsor_id: user._id
    //         });

    //         if (batchExist) {
    //             comment = `User was already uploaded with batch ${batchExist.batch_no}`;
    //         }

    //         const batchListData = {
    //             firstname: member.firstname,
    //             lastname: member.lastname,
    //             othername: member.othername,
    //             country: member.nationality,
    //             email: member.email,
    //             phone: member.phone,
    //             sponsor: user._id,
    //             batch_no: body.batch_no,
    //             batch_no_id: `${body.batch_no}-${await codeGenerator(6, 'ABCDEFGHIJ1234567890')}`
    //         };

    //         batchList.push(batchListData);
    //     }

    //     const count = batchList.length + user.total_number_of_members_created;
    //     const amountLeft = user.total_number_of_members_chosen - user.total_number_of_members_created;
    //     if (count > user.total_number_of_members_chosen)
    //         throw new Error(`Members in Sponsor left to be created is ${amountLeft} members`);

    //     const createBatchList = await BeneficiaryBatch.insertMany(batchList);

    //     // Get current date
    //     const currentDate = new Date();

    //     // Define month names
    //     const monthNames = [
    //         'January',
    //         'February',
    //         'March',
    //         'April',
    //         'May',
    //         'June',
    //         'July',
    //         'August',
    //         'September',
    //         'October',
    //         'November',
    //         'December'
    //     ];

    //     // Format date as "day, month, year"
    //     const formattedDate = `${currentDate.getDate()}, ${monthNames[currentDate.getMonth()]
    //         }, ${currentDate.getFullYear()}`;

    //     //create email profile here
    //     const bulkUpload = {
    //         email: user.email,
    //         name_of_sponsor: user.name_of_cooperation,
    //         number_uploaded: batchList.length,
    //         date: formattedDate
    //     };
    //     const mailData = {
    //         email: user.email,
    //         subject: 'CONFIRMATION OF BULK BENEFICIARY UPLOAD',
    //         type: 'html',
    //         html: memberBulkUpload(bulkUpload).html,
    //         text: memberBulkUpload(bulkUpload).text
    //     };
    //     const msg = await formattMailInfo(mailData, customConfig);

    //     const msgDelivered = await messageBird(msg);
    //     if (!msgDelivered)
    //         throw new InternalServerError(400, 'server slip. Bulk Upload was made without mail being sent','');

    //     if (!createBatchList) throw new InternalServerError(400,'server slip, Please try again later','');

    //     return true;
    // };

    public async listBeneficiarysService(): Promise<IBeneficiaryDocument[]> {
        try {
            return Beneficiary.listBeneficiarys();
        } catch (err: any) {
            throw new BadRequestError(400, `Something went wrong - ${err.message}`, '')
        }
    }

    public async getBeneficiariesBySponsorService(sponsor_id: Types.ObjectId): Promise<IBeneficiaryDocument[]> {
        try {
            return Beneficiary.find({ sponsor_id: sponsor_id });
        } catch (err: any) {
            throw new BadRequestError(400, `Something went wrong - ${err.message}`, '')
        }
    }


    public async getBeneficiaryService(beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument | null> {
        try {
            if (!beneficiary_id)
                throw new ExpectationFailedError(400, `Please enter beneficiary id`, '');
            return Beneficiary.getBeneficiary(beneficiary_id);
        } catch (err: any) {
            throw new BadRequestError(400, `Something went wrong - ${err.message}`, '')
        }
    }

    public async updateBeneficiaryService(beneficiary_id: Types.ObjectId, beneficiary: IBeneficiary): Promise<IBeneficiaryDocument | null> {
        try {
            if (!beneficiary_id)
                throw new ExpectationFailedError(400, `Please enter beneficiary id`, '');
            return Beneficiary.updateBeneficiary(beneficiary_id, beneficiary);
        } catch (err: any) {
            throw new BadRequestError(400, `Something went wrong -${err.message}`, '');
        }
    }

    public async deleteBeneficiaryService(beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument | null> {
        try {
            if (!beneficiary_id)
                throw new ExpectationFailedError(400, `Please enter beneficiary id`, '');
            return Beneficiary.deleteBeneficiary(beneficiary_id);
        } catch (err: any) {
            throw new BadRequestError(400, `Something went wrong-${err.message}`, '');
        }
    }

}

export default BeneficiaryService

