import PartnerRepository from '../repositories/partner.repository'
import PartnerSecurity from '../security/partner.security'

class PartnerService {
  private partnerRepository: PartnerRepository
  private partnerSecurity: PartnerSecurity

  constructor() {
    this.partnerRepository = new PartnerRepository()
    this.partnerSecurity = new PartnerSecurity()
  }

  public comparePassword(password: string, encryptedPassword: string): boolean {
    return this.partnerSecurity.comparePassword(password, encryptedPassword)
  }

  public async findAll(): Promise<any> {
    const partners = await this.partnerRepository.findAll()
    return partners
  }

  public async findById(id: string): Promise<any> {
    const partner = await this.partnerRepository.findById(id)
    return partner
  }

  public async findByPartnername(partnername: string): Promise<any> {
    const partner = await this.partnerRepository.findByPartnername(partnername)
    return partner
  }

  public async findByEmail(email: string): Promise<any> {
    const partner = await this.partnerRepository.findByEmail(email)
    return partner
  }

  public async findByPhone(phone: string): Promise<any> {
    const partner = await this.partnerRepository.findByPhone(phone)
    return partner
  }

  public async findByIdWithPassword(id: string): Promise<any> {
    const partner = await this.partnerRepository.findByIdWithPassword(id)
    return partner
  }

  public async updatePartnername(id: string, partnername: string): Promise<any> {
    const partner = await this.partnerRepository.updatePartnername(id, partnername)
    return partner
  }

  public async updateName(id: string, name: string): Promise<any> {
    const partner = await this.partnerRepository.updateName(id, name)
    return partner
  }

  public async updateEmail(id: string, email: string): Promise<any> {
    const partner = await this.partnerRepository.updateEmail(id, email)
    return partner
  }

  public async updatePassword(id: string, password: string): Promise<any> {
    const encryptedPassword = this.partnerSecurity.encrypt(password)
    const partner = await this.partnerRepository.updatePassword(id, encryptedPassword)
    return partner
  }

  public async updatePhone(id: string, phone: string): Promise<any> {
    const partner = await this.partnerRepository.updatePhone(id, phone)
    return partner
  }

  public async updateAddress(id: string, address: string): Promise<any> {
    const partner = await this.partnerRepository.updateAddress(id, address)
    return partner
  }

  public async deletePartner(id: string): Promise<any> {
    const partner = await this.partnerRepository.deletePartner(id)
    return partner
  }

  public async getPartnersStats(): Promise<any> {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    const partnersStats = await this.partnerRepository.getPartnersStats(lastYear)
    return partnersStats
  }
}

export default PartnerService
