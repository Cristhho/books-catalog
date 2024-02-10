import { render } from '@testing-library/react'

import App from '../src/App'

describe('<App />', () => {

  beforeEach(() => {
    render(<App />);
  })

  it('should render', () => {
    expect(true).toBeTruthy()
  })
})