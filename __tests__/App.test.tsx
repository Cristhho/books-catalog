import { screen, waitFor } from '@testing-library/react'
import { QueryClient } from '@tanstack/react-query'
import App from '../src/App'
import type { Response } from '../src/api/booksApi'
import { renderWithClient } from './utils'

jest.mock('@/api/booksApi', () => ({
  fetchBooks: () => {
    return new Promise<Response>((res) => res({
      default: {
        library: []
      }
    }))
  }
}))

describe('<App />', () => {
  const queryClient = new QueryClient()
  let container: HTMLElement

  beforeEach(() => {
    container = renderWithClient(queryClient, <App />).container
  })

  it('should be loading', () => {
    expect(screen.getByText('loading...')).toBeInTheDocument()
  })

  it('should render the main tag', async () => {
    await waitFor(() => {
      expect(screen.queryByText('loading...')).toBeNull()
    })

    screen.debug(container)
    expect(await screen.findByRole('main')).toBeInTheDocument()
  })
})
