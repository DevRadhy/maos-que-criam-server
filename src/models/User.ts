import { randomUUID } from "crypto";

type UserProps = {
  email: string;
  name: string;
  cpf: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
}

class User {
  public readonly id: string;
  public email: string;
  public name: string;
  public cpf: string;
  public whatsapp: string;
  public instagram: string;
  public facebook: string;

  constructor(props: UserProps, id?: string) {
    Object.assign(this, props)
    this.id = id ?? randomUUID()
  }
}

export default User
