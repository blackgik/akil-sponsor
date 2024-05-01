export interface IUserCreateDto {
    firstname: string,
    lastname: string,
    avatar: string,
    email: string,
    phone: string,
    gender: string,
    state: string,
    country: string,
    password: string,
    city: string,
    address: string,
    dob: Date,
    hash: string,
    hashedRt: string,
    email_verified: boolean,
    acctstatus: string,
    roleId: string
}