import { Customer } from "@/entities/customer";

interface ICustomersRepositories {
  create(customer: Customer): Promise<void>
  fetchAll(): Promise<Customer[]>
  fetchAllByOrder(): Promise<Customer[]>
}

export { ICustomersRepositories }