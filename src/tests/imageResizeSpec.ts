import supertest from 'supertest'
import app from '../index'
import { imageResize } from '../utils/imageResize'

const request = supertest(app)

describe('Test endpoint', () => {
  it('Get hello api endpoint', async () => {
    const response = await request.get('/api/images/hello')
    expect(response.status).toBe(200)
  })

  it('Get imageResize api endpoint, success run', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=200&height=200'
    )
    expect(response.status).toBe(200)
  })

  it('Get imageResize api endpoint, Throws an error if wrong filename provided', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport1&width=200&height=200'
    )
    expect(response.status).toBe(404)
  })
})

describe('Testing image resize processing function', () => {
  it('Process succesfully ', async () => {
    await expectAsync(imageResize('encenadaport', 200, 200)).toBeResolved()
  })

  it('Throws an error if wrong filename provided', async () => {
    await expectAsync(
      imageResize('Encenadaport', 200, 200)
    ).toBeRejectedWithError(
      Error,
      'Input file is missing: assets/full/Encenadaport.jpg'
    )
  })
})
