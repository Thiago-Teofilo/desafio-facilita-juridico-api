import { FastifyRequest, FastifyReply } from 'fastify'
import { FetchAllCustomersByOrderUseCase } from './FetchAllCustomersByOrderUseCase'

class FetchAllCustomersByOrderController {

  constructor(
    private fetchAllCustomersByOrderUseCase: FetchAllCustomersByOrderUseCase
  ){}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customers = await this.fetchAllCustomersByOrderUseCase.execute()    
    
    const customersWithAuxNumbers = customers.map((customer, index) => ({
      ...customer,
      auxNumber: index + 1 // Número auxiliar em ordem crescente
    }));
  
    if (customers) {
      return reply.status(200).send({customers: customersWithAuxNumbers})
    } else {
      return reply.status(200).send()
    }
  }
}

export { FetchAllCustomersByOrderController }