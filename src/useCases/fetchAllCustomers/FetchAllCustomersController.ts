import { FastifyRequest, FastifyReply } from 'fastify'
import { FetchAllCustomersUseCase } from './FetchAllCustomersUseCase'

class FetchAllCustomersController {

  constructor(
    private fetchAllCustomersUseCase: FetchAllCustomersUseCase
  ){}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customers = await this.fetchAllCustomersUseCase.execute()    
    return reply.send({customers})
  }
}

export { FetchAllCustomersController }