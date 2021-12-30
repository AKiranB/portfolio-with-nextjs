import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('hero', () => {

  test('displays the title', async () => {
    render(<Hero />)

    // fireEvent.click(screen.getByText('Load Greeting'))

    // await waitFor(() => screen.getByRole('heading'))
    // const x = screen.queryByTestId('title')
    // console.log('test result>>>>>>>>>>>>>>>>>>>', x)

    expect(screen.queryByTestId('title')).toHaveTextContent('Hey there! My name is Kiran')
    // expect(screen.getByRole('button')).toBeDisabled()


  })

  xtest('handles server error', async () => {
    server.use(
      rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )

    render(<Fetch url="/greeting" />)

    fireEvent.click(screen.getByText('Load Greeting'))

    await waitFor(() => screen.getByRole('alert'))

    expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
    expect(screen.getByRole('button')).not.toBeDisabled()
  })
})
