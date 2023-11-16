interface UsersTypes {
  id: string
  name: string
  age: number
  email: string
  job: string
  city: string
  state: string
}

export const usersMock: UsersTypes[] = [
  {
    id: "1",
    name: 'Samantha Silva',
    age: 28,
    email: 'samysuki1@gmail.com',
    job: 'Coordenadora de E-commerce',
    city: 'São Paulo',
    state: 'São Paulo'
  },
  {
    id: "2",
    name: 'Mainan',
    age: 25,
    email: 'moraesmainan@gmail.com',
    job: 'Analista de SEO Jr',
    city: 'São Paulo',
    state: 'São Paulo'
  },
]