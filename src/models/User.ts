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
  public id: string;
  public props: UserProps;

  constructor(props: UserProps, id?: string) {
    this.id = id ? id : randomUUID()
    this.props = props
  }
}

export default User
