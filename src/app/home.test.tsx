import { render } from '@testing-library/react'
import Home from './page'

test("rendre home page", () => {
  render(<Home />)
})


test("sum", () => {
  expect(3 + 3).toEqual(6)
})
