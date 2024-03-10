import { Customer } from "@/entities/customer";
import { ICustomersRepositories } from "@/repositories/ICustomersRepositories";

interface CreateCustomerDTO {
  name: string;
  email: string;
  tel: string;
  cordx: number;
  cordy: number;
  range: number;
}

export class CreateCustomerUseCase {
  constructor(private customersRepository: ICustomersRepositories) {}

  async execute({ name, email, tel, cordx, cordy, range }: CreateCustomerDTO) {
    let customer = new Customer()
    
    customer = Object.assign({
      ...customer,
      name,
      email,
      tel,
      cordx,
      cordy,
      range
    })

    await this.customersRepository.create(customer)
  }
}