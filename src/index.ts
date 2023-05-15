import express from 'express'

import routes from './routes/index'

const app = express()
const port = 3000

app.use('/api', routes)

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})

export default app
