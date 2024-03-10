import { CustumersPostgresRepository } from "@/repositories/implementations/CustomersPostgresRepositories"
import { CreateCustomerUseCase } from "./CreateCustomerUseCase"
import { CreateCustomerController } from "./CreateCustomerController"

const customersRepository = new CustumersPostgresRepository()

const createCustomerUseCase = new CreateCustomerUseCase(customersRepository)
const createCustomerController = new CreateCustomerController(createCustomerUseCase)

export { createCustomerController }