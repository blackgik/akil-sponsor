import SponsorRepository from '../repositories/sponsor.repository'
import SponsorSecurity from '../security/sponsor.security'

class SponsorService {
  private sponsorRepository: SponsorRepository
  private sponsorSecurity: SponsorSecurity

  constructor() {
    this.sponsorRepository = new SponsorRepository()
    this.sponsorSecurity = new SponsorSecurity()
  }

  public comparePassword(password: string, encryptedPassword: string): boolean {
    return this.sponsorSecurity.comparePassword(password, encryptedPassword)
  }

  public async findAll(): Promise<any> {
    const sponsors = await this.sponsorRepository.findAll()
    return sponsors
  }

  public async findById(id: string): Promise<any> {
    const sponsor = await this.sponsorRepository.findById(id)
    return sponsor
  }

  public async findBySponsorname(sponsorname: string): Promise<any> {
    const sponsor = await this.sponsorRepository.findBySponsorname(sponsorname)
    return sponsor
  }

  public async findByEmail(email: string): Promise<any> {
    const sponsor = await this.sponsorRepository.findByEmail(email)
    return sponsor
  }

  public async findByPhone(phone: string): Promise<any> {
    const sponsor = await this.sponsorRepository.findByPhone(phone)
    return sponsor
  }

  public async findByIdWithPassword(id: string): Promise<any> {
    const sponsor = await this.sponsorRepository.findByIdWithPassword(id)
    return sponsor
  }

  public async updateSponsorname(id: string, sponsorname: string): Promise<any> {
    const sponsor = await this.sponsorRepository.updateSponsorname(id, sponsorname)
    return sponsor
  }

  public async updateName(id: string, name: string): Promise<any> {
    const sponsor = await this.sponsorRepository.updateName(id, name)
    return sponsor
  }

  public async updateEmail(id: string, email: string): Promise<any> {
    const sponsor = await this.sponsorRepository.updateEmail(id, email)
    return sponsor
  }

  public async updatePassword(id: string, password: string): Promise<any> {
    const encryptedPassword = this.sponsorSecurity.encrypt(password)
    const sponsor = await this.sponsorRepository.updatePassword(id, encryptedPassword)
    return sponsor
  }

  public async updatePhone(id: string, phone: string): Promise<any> {
    const sponsor = await this.sponsorRepository.updatePhone(id, phone)
    return sponsor
  }

  public async updateAddress(id: string, address: string): Promise<any> {
    const sponsor = await this.sponsorRepository.updateAddress(id, address)
    return sponsor
  }

  public async deleteSponsor(id: string): Promise<any> {
    const sponsor = await this.sponsorRepository.deleteSponsor(id)
    return sponsor
  }

  public async getSponsorsStats(): Promise<any> {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    const sponsorsStats = await this.sponsorRepository.getSponsorsStats(lastYear)
    return sponsorsStats
  }
}

export default SponsorService
