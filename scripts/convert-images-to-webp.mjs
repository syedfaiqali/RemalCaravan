import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsRoot = path.join(__dirname, '..', 'src', 'assets')

const rasterExts = new Set(['.png', '.jpg', '.jpeg'])

async function walk(dir) {
  let count = 0
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      count += await walk(full)
      continue
    }
    const ext = path.extname(e.name).toLowerCase()
    if (!rasterExts.has(ext)) continue
    const webpPath = full.slice(0, -ext.length) + '.webp'
    await sharp(full).webp({ quality: 85 }).toFile(webpPath)
    await fs.unlink(full)
    count++
  }
  return count
}

try {
  await fs.access(assetsRoot)
} catch {
  console.error('Missing folder:', assetsRoot)
  process.exit(1)
}

const n = await walk(assetsRoot)
console.log(`Converted ${n} raster file(s) to WebP (originals removed).`)
