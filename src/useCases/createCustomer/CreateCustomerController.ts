import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateCustomerUseCase } from './CreateCustomerUseCase'
import calculateDistance from '@/utils/distance'
import { z } from 'zod'

class CreateCustomerController {

  constructor(
    private createCustomerUseCase: CreateCustomerUseCase
  ){}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      tel: z.string(),
      cordx: z.number(),
      cordy: z.number(),
    })
  
    const { name, email, tel, cordx, cordy } = registerBodySchema.parse(request.body)
  
    const range = calculateDistance(cordx, cordy) 

    this.createCustomerUseCase.execute({
      name,
      email,
      tel,
      cordx,
      cordy,
      range
    })
    
    return reply.send()
  }
}

export { CreateCustomerController }