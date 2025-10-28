
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {blogs} from '../data/blogs'
import { useParams, Link } from 'react-router-dom'
import dayjs from 'dayjs'

export default function BlogDetail() {
  const { id } = useParams()
  const post = blogs.find(b => b.id === id)
  if (!post) return (
    <Layout>
      <section className="container-max mt-10">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="btn mt-4">Back to Blog</Link>
      </section>
    </Layout>
  )

  const structured = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": { "@type": "Person", "name": post.author },
    "image": post.cover,
    "articleSection": post.category,
    "keywords": post.keywords?.join(', ')
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} | Subham Gupta`}
        description={post.excerpt}
        url={`https://subhamgupta.com.np/blog/${post.id}`}
        image={post.cover}
        keywords={post.keywords}
        structuredData={structured}
        canonical={`https://subhamgupta.com.np/blog/${post.id}`}
      />
      <article className="container-max mt-10 prose dark:prose-invert max-w-3xl">
        <p className="text-sm opacity-60">{post.category} • {dayjs(post.date).format('MMM D, YYYY')} • {post.readingMinutes} min read</p>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <img src={post.cover} alt={post.title} title={post.title} className="rounded-2xl mt-4" />
        <div className="mt-6 whitespace-pre-wrap leading-7">{post.content}</div>
        <Link to="/blog" className="btn mt-8 inline-block">← Back to Blog</Link>
      </article>
    </Layout>
  )
}
