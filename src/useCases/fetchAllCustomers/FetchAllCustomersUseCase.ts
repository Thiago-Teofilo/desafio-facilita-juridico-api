import { ICustomersRepositories } from "@/repositories/ICustomersRepositories";

export class FetchAllCustomersUseCase {
  constructor(private customersRepository: ICustomersRepositories) {}

  async execute() {
    return await this.customersRepository.fetchAll()
  }
}