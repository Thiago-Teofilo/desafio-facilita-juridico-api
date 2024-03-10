import { Customer } from "@/entities/customer";
import { ICustomersRepositories } from "../ICustomersRepositories";
import { Pool } from "pg";

const customerSchema = z.object({
  uuid: z.string(),
  name: z.string(),
  email: z.string().email(),
  tel: z.string(),
  cordx: z.number(),
  cordy: z.number(),
  range: z.number(),
});

import { createConnection } from "@/database/connection";
import { z } from "zod";

export class CustumersPostgresRepository implements ICustomersRepositories {
  private client: Pool

  constructor() {
    createConnection().then((connection) => (this.client = connection))
  }
  
  async create({uuid, name, email, tel, cordx, cordy, range}: Customer): Promise<void> {
    await this.client.query("INSERT INTO customers(uuid, name, email, tel, cordx, cordy, range) VALUES($1, $2, $3, $4, $5, $6, $7)",
    [uuid, name, email, tel, cordx, cordy, range])
  }

  async fetchAll(): Promise<Customer[]> {
    const result = await this.client.query("SELECT * FROM customers");
    return result.rows
  }

  async fetchAllByOrder(): Promise<Customer[]> {
    const result = await this.client.query("SELECT * FROM customers ORDER BY range ASC");
    return result.rows
  }
}