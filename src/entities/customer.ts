import { v4 as uuidv4 } from "uuid"

class Customer {
  uuid: string;
  name: string;
  tel: string;
  email: string;
  cordx: number;
  cordy: number;
  range: number;

  constructor() {
    if(!this.uuid) {
      this.uuid = uuidv4()
    }
  }
}

export { Customer }