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
    name: 'Lucas Gomes',
    age: 31,
    email: 'lucasgomesbr@gmail.com',
    job: 'Desenvolvedor',
    city: 'Ribeirão Preto',
    state: 'São Paulo'
  },
  {
    id: "2",
    name: 'Marina Falcão',
    age: 27,
    email: 'marina@hotmail.com',
    job: 'Professora',
    city: 'Ribeirão Preto',
    state: 'São Paulo'
  },
  {
    id: "3",
    name: 'Ritinha',
    age: 2,
    email: 'ritita@gmail.com',
    job: 'Gata',
    city: 'Ribeirão Preto',
    state: 'São Paulo'
  },
]