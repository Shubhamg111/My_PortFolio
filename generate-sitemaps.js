import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
import glob from 'glob'

const siteUrl = 'https://yourdomain.com'

async function generate() {
  const pages = glob.sync('src/pages/**/*.tsx') 

  const urls = pages.map(page => {
    const path = page
      .replace('src/pages', '')
      .replace('.tsx', '')
      .replace('/index', '')

    return path === '' ? '/' : path
  })

  const sitemapStream = new SitemapStream({ hostname: siteUrl })
  const writeStream = createWriteStream('./public/sitemap.xml')

  for (const url of urls) {
    sitemapStream.write({ url })
  }
  sitemapStream.end()

  await streamToPromise(sitemapStream).then(data =>
    writeStream.write(data.toString())
  )
}

generate()
