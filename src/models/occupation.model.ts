import { Document, Model, Types} from 'mongoose'

export interface IOccupation{
    occupation_name: string,
    occupation_code: string,
    occupation_slug?: string,
    occupation_description?: string
    is_active: boolean
}


export interface IOccupationDocument extends IOccupation, Document{}

export interface IOccupationModel extends Model<IOccupationDocument>{
    buildOccupation(occupation: IOccupation):IOccupationDocument
    listOccupations():Promise<IOccupationDocument[]>
    getOccupation(occupation_id: Types.ObjectId):Promise<IOccupationDocument | null>
    updateOccupation(occupation_id: Types.ObjectId, occupation: IOccupation):Promise<IOccupationDocument>
    deleteOccupation(occupation_id: Types.ObjectId):Promise<IOccupationDocument | null>
}


