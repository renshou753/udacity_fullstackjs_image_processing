import path from 'path'
import { Request, Response } from 'express'
import { imageResize, imageFilename } from '../utils/imageResize'

const outputPath = 'assets/thumb'

export const helloWorld = (req: Request, res: Response) => {
  res.send('Hello, world!')
}

export const resizeImage = (req: Request, res: Response) => {
  const filename = req.query.filename as string
  const width = parseInt(req.query.width as string)
  const height = parseInt(req.query.height as string)
  const fileName = imageFilename(filename)
  const fileout = path.join(outputPath, fileName)

  imageResize(filename, width, height)
    .then(() => {
      res.sendFile(path.resolve(fileout))
    })
    .catch(() => {
      res.status(404).send('Error occurred while resizing the image')
    })
}
