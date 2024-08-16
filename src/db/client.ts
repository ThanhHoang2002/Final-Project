import { LoginRequest } from '../features/auth-client/api/login'
import { PostRegisterRequest } from '../features/auth-client/api/postRegister'
import { Client } from '../types'
const client: Array<Client> = []
export const addClient = (newClient: PostRegisterRequest) => {
  const clientDTO: Client = {
    clientId: client.length + 1,
    name: newClient.name,
    birthday: newClient.birthday,
    email: newClient.email,
    gender: newClient.gender,
    password: newClient.password,
    phone: newClient.phone,
    point: 0
  }
  client.push(clientDTO)
  return clientDTO
}
export const loginClient = (request: LoginRequest) => {
  const clientLogin = client.find((client) => client.email === request.email && client.password === request.password)
  return clientLogin
}
