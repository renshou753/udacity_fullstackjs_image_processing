import express from 'express'
const rootRouter = express.Router()

import image from './modules/image'

rootRouter.use('/images', image)

export default rootRouter
