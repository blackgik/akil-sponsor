export interface IAccountCreateDto {
    firstname: string,
    lastname: string,
    avatar: string,
    email: string,
    phone: string,
    state: string,
    country: string,
    address: string,
    dob: Date,
    password: string,
    hash: string,
    hashedRt: string,
    email_verified: boolean,
    acctstatus: string,
    roleId: string
}