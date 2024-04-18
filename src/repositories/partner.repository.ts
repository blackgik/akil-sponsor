import Partner from '../models/partner.model'
import PartnerInterface from '../interfaces/partner.interface'

class PartnerRepository {
  public async findAll(): Promise<PartnerInterface[]> {
    const partners = await Partner.find({}).select('-password')
    return partners
  }

  public async findById(id: string): Promise<PartnerInterface | null> {
    const partner = await Partner.findById(id).select('-password')
    return partner
  }

  public async findByPartnername(username: string): Promise<PartnerInterface | null> {
    const partner = await Partner.findOne({ username }).select('-password')
    return partner
  }

  public async findByEmail(email: string): Promise<PartnerInterface | null> {
    const partner = await Partner.findOne({ email }).select('-password')
    return partner
  }

  public async findByPhone(phone: string): Promise<PartnerInterface | null> {
    const partner = await Partner.findOne({ phone }).select('-password')
    return partner
  }

  public async findByIdWithPassword(id: string): Promise<PartnerInterface | null> {
    const partner = await Partner.findById(id)
    return partner
  }

  public async findByPartnernameWithPassword(
    username: string,
  ): Promise<PartnerInterface | null> {
    const partner = await Partner.findOne({ username })
    return partner
  }

  public async findByEmailWithPassword(
    email: string,
  ): Promise<PartnerInterface | null> {
    const partner = await Partner.findOne({ email })
    return partner
  }

  public async findByPhoneWithPassword(
    phone: string,
  ): Promise<PartnerInterface | null> {
    const partner = await Partner.findOne({ phone })
    return partner
  }

  public async createPartner(partner: any): Promise<PartnerInterface | null> {
    const newPartner = new Partner({
      username: partner.username,
      firstname: partner.firstname,
      lastname: partner.lastname,
      email: partner.email,
      password: partner.password,
      phone: partner.phone,
      address: partner.address,
      isAdmin: partner.isAdmin,
    })
    const savedPartner = await newPartner.save()
    return savedPartner
  }

  public async updatePartnername(
    id: string,
    username: string,
  ): Promise<PartnerInterface | null> {
    const partner = await Partner.findByIdAndUpdate(
      id,
      { username },
      { new: true },
    ).select('-password')
    return partner
  }

  public async updateName(
    id: string,
    name: string,
  ): Promise<PartnerInterface | null> {
    const partner = await Partner.findByIdAndUpdate(
      id,
      { name },
      { new: true },
    ).select('-password')
    return partner
  }

  public async updateEmail(
    id: string,
    email: string,
  ): Promise<PartnerInterface | null> {
    const partner = await Partner.findByIdAndUpdate(
      id,
      { email },
      { new: true },
    ).select('-password')
    return partner
  }

  public async updatePassword(
    id: string,
    password: string,
  ): Promise<PartnerInterface | null> {
    const partner = await Partner.findByIdAndUpdate(
      id,
      { password },
      { new: true },
    ).select('-password')
    return partner
  }

  public async updatePhone(
    id: string,
    phone: string,
  ): Promise<PartnerInterface | null> {
    const partner = await Partner.findByIdAndUpdate(
      id,
      { phone },
      { new: true },
    ).select('-password')
    return partner
  }

  public async updateAddress(
    id: string,
    address: string,
  ): Promise<PartnerInterface | null> {
    const partner = await Partner.findByIdAndUpdate(
      id,
      { address },
      { new: true },
    ).select('-password')
    return partner
  }

  public async deletePartner(id: string): Promise<PartnerInterface | null> {
    const partner = await Partner.findByIdAndDelete(id)
    return partner
  }

  public async getPartnersStats(lastYear: Date): Promise<PartnerInterface[] | null> {
    const partners = await Partner.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ])
    return partners
  }
}

export default PartnerRepository
