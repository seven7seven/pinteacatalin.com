import fs from 'fs'
import path from 'path'

export default (req, res) => {
  const photoDirectory = 'images/photography'
  const dir = path.resolve('./public', photoDirectory)
  const filenames = fs.readdirSync(dir)
  const photos = filenames.map(name => path.join('/', photoDirectory, name))

  console.log('asdasd', filenames);

  res.statusCode = 200
  res.json(photos);
}
