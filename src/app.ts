import fastify from "fastify";
import { appRoutes } from "./http/routes";
import cors from '@fastify/cors'

import './database/runMigrations'

export const app = fastify()

app.register(appRoutes)

app.register(cors, {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
})