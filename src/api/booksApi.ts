import { BooksResponse } from '@/model/BooksResponse'

export type Response = {
  default: BooksResponse
}

export const fetchBooks = (): Promise<Response> =>
  fetch('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev')
    .then((res) => res.json())