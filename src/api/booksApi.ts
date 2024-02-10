import { BooksResponseClass } from '@/model/BooksResponse'

type Response = {
  default: BooksResponseClass
}

export const fetchBooks = (): Promise<Response> =>
  fetch('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev')
    .then((res) => res.json())