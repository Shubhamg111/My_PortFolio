import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
import * as glob from 'glob';

const siteUrl = 'https://subhamgupta.com.np'

// 1. **MOCK DATA:** Replace this with the actual array of blog post IDs/slugs
// In a real scenario, this data would likely be read from a local JSON file or a database.
const blogPostSlugs = [
    'the-most-in-demand-programming-skills-for-2025',
    'getting-started-with-python',
    'django-vs-flask-2025',
    
];

async function generate() {
    // --- Existing Pages Logic ---
    const pages = glob.sync('src/pages/**/*.tsx')

    const baseUrls = pages.map(page => {
        const path = page
            .replace('src/pages', '')
            .replace('.tsx', '')
            .replace('/index', '')

        return path === '' ? '/' : path
    })

    // --- New Blog URLs Logic ---
    const blogUrls = blogPostSlugs.map(slug => `/blog/${slug}`)

    // --- Merge All URLs ---
    const allUrls = [...baseUrls, ...blogUrls];

    // --- Sitemap Generation ---
    const sitemapStream = new SitemapStream({ hostname: siteUrl })
    const writeStream = createWriteStream('./public/sitemap.xml')

    for (const url of allUrls) {
        // You can add additional fields here if needed, like lastmod or priority
        sitemapStream.write({ url }) 
    }
    sitemapStream.end()

    await streamToPromise(sitemapStream).then(data =>
        writeStream.write(data.toString())
    )
    
    console.log('✅ sitemap.xml generated successfully in ./public/');
}

generate()