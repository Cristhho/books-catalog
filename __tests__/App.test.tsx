import { QueryClient } from '@tanstack/react-query'
import App from '../src/App'
import { renderWithClient } from './utils'

fdescribe('<App />', () => {
  const queryClient = new QueryClient()

  beforeEach(() => {
    renderWithClient(queryClient, <App />)
  })

  it('should render', () => {
    expect(true).toBeTruthy()
  })
})