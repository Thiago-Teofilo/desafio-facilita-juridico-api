import { FastifyInstance } from 'fastify'
import { createCustomerController } from "@/useCases/createCustomer";
import { fetchAllCustomersController } from '@/useCases/fetchAllCustomers';
import { fetchAllCustomersByOrderController } from '@/useCases/fetchAllCustomersByOrder';

export async function appRoutes(app: FastifyInstance) {
  app.post('/customers', async (request,  reply) => {
    return createCustomerController.handle(request, reply)
  })

  app.get('/customers', async (request,  reply) => {
    return fetchAllCustomersController.handle(request, reply)
  })

  app.get('/travel-order', async (request,  reply) => {
    return fetchAllCustomersByOrderController.handle(request, reply)
  })
}