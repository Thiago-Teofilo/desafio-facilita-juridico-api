import { CustumersPostgresRepository } from "@/repositories/implementations/CustomersPostgresRepositories"
import { FetchAllCustomersUseCase } from "./FetchAllCustomersUseCase"
import { FetchAllCustomersController } from "./fetchAllCustomersController"

const customersRepository = new CustumersPostgresRepository()

const fetchAllCustomersUseCase = new FetchAllCustomersUseCase(customersRepository)
const fetchAllCustomersController = new FetchAllCustomersController(fetchAllCustomersUseCase)

export { fetchAllCustomersController }