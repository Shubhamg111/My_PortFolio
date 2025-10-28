
import { Helmet } from 'react-helmet-async'

type Props = {
  title?: string
  description?: string
  url?: string
  image?: string
  keywords?: string[]
  structuredData?: object
  canonical?: string
}

const defaultDesc = 'Certified Python instructor and full‑stack developer in Kathmandu. Training, web development, and consultancy.'
const defaultImage = '/favico.png'
const site = 'https://subhamgupta.com.np'

export default function SEO({ title='Python Instructor & Web Developer | Subham Gupta', description=defaultDesc, url=site, image=defaultImage, keywords=[], structuredData, canonical }: Props) {
  const fullTitle = title
  const joinedKeywords = [
    'best python instructor in kathmandu',
    'python developer in kathmandu',
    'best teacher for python in nepal',
    'python tutor in kathmandu',
    'full stack developer nepal',
    'django developer kathmandu',
    'web developer in ktm',
    ...keywords
  ].join(', ')

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={joinedKeywords} />
      <meta name="author" content="Subham Gupta" />
      <link rel="canonical" href={canonical ?? url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
