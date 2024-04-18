import Sponsor from '../models/sponsor.model'
import SponsorInterface from '../interfaces/sponsor.interface'

class SponsorRepository {
  public async findAll(): Promise<SponsorInterface[]> {
    const sponsors = await Sponsor.find({}).select('-password')
    return sponsors
  }

  public async findById(id: string): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findById(id).select('-password')
    return sponsor
  }

  public async findBySponsorname(username: string): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findOne({ username }).select('-password')
    return sponsor
  }

  public async findByEmail(email: string): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findOne({ email }).select('-password')
    return sponsor
  }

  public async findByPhone(phone: string): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findOne({ phone }).select('-password')
    return sponsor
  }

  public async findByIdWithPassword(id: string): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findById(id)
    return sponsor
  }

  public async findBySponsornameWithPassword(
    username: string,
  ): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findOne({ username })
    return sponsor
  }

  public async findByEmailWithPassword(
    email: string,
  ): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findOne({ email })
    return sponsor
  }

  public async findByPhoneWithPassword(
    phone: string,
  ): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findOne({ phone })
    return sponsor
  }

  public async createSponsor(sponsor: any): Promise<SponsorInterface | null> {
    const newSponsor = new Sponsor({
      username: sponsor.username,
      firstname: sponsor.firstname,
      lastname: sponsor.lastname,
      email: sponsor.email,
      password: sponsor.password,
      phone: sponsor.phone,
      address: sponsor.address,
      isAdmin: sponsor.isAdmin,
    })
    const savedSponsor = await newSponsor.save()
    return savedSponsor
  }

  public async updateSponsorname(
    id: string,
    username: string,
  ): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findByIdAndUpdate(
      id,
      { username },
      { new: true },
    ).select('-password')
    return sponsor
  }

  public async updateName(
    id: string,
    name: string,
  ): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findByIdAndUpdate(
      id,
      { name },
      { new: true },
    ).select('-password')
    return sponsor
  }

  public async updateEmail(
    id: string,
    email: string,
  ): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findByIdAndUpdate(
      id,
      { email },
      { new: true },
    ).select('-password')
    return sponsor
  }

  public async updatePassword(
    id: string,
    password: string,
  ): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findByIdAndUpdate(
      id,
      { password },
      { new: true },
    ).select('-password')
    return sponsor
  }

  public async updatePhone(
    id: string,
    phone: string,
  ): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findByIdAndUpdate(
      id,
      { phone },
      { new: true },
    ).select('-password')
    return sponsor
  }

  public async updateAddress(
    id: string,
    address: string,
  ): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findByIdAndUpdate(
      id,
      { address },
      { new: true },
    ).select('-password')
    return sponsor
  }

  public async deleteSponsor(id: string): Promise<SponsorInterface | null> {
    const sponsor = await Sponsor.findByIdAndDelete(id)
    return sponsor
  }

  public async getSponsorsStats(lastYear: Date): Promise<SponsorInterface[] | null> {
    const sponsors = await Sponsor.aggregate([
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
    return sponsors
  }
}

export default SponsorRepository
