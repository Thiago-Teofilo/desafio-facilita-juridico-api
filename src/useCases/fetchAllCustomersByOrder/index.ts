import { CustumersPostgresRepository } from "@/repositories/implementations/CustomersPostgresRepositories"
import { FetchAllCustomersByOrderUseCase } from "./FetchAllCustomersByOrderUseCase"
import { FetchAllCustomersByOrderController } from "./FetchAllCustomersByOrderController"

const customersRepository = new CustumersPostgresRepository()

const fetchAllCustomersByOrderUseCase = new FetchAllCustomersByOrderUseCase(customersRepository)
const fetchAllCustomersByOrderController = new FetchAllCustomersByOrderController(fetchAllCustomersByOrderUseCase)

export { fetchAllCustomersByOrderController }