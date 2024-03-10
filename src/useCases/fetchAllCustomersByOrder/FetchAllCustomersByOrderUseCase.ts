import { ICustomersRepositories } from "@/repositories/ICustomersRepositories";

export class FetchAllCustomersByOrderUseCase {
  constructor(private customersRepository: ICustomersRepositories) {}

  async execute() {
    return await this.customersRepository.fetchAllByOrder()
  }
}