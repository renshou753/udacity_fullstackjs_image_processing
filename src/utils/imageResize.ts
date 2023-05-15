import sharp from 'sharp'
import path from 'path'

const inputPath = 'assets/full'
const outputPath = 'assets/thumb'

export function imageResize(
  filename: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo> {
  const fileName = imageFilename(filename)
  const fileinput = path.join(inputPath, fileName)
  const fileout = path.join(outputPath, fileName)

  return sharp(fileinput).resize(width, height).toFile(fileout)
}

export function imageFilename(filename: string): string {
  if (!filename.endsWith('.jpg')) {
    filename = filename + '.jpg'
  }
  return filename
}
