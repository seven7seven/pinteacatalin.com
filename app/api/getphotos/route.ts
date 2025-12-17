import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const photoDirectory = 'images/photography'
  const dir = path.resolve(process.cwd(), 'public', photoDirectory)
  const filenames = fs.readdirSync(dir)
  const photos = filenames.map(name => path.join('/', photoDirectory, name))

  return NextResponse.json(photos)
}
