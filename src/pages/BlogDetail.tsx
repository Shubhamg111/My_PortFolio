import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { blogs } from '../data/blogs'
import { useParams, Link } from 'react-router-dom'
import dayjs from 'dayjs'
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function BlogDetail() {
  const { id } = useParams()
  const post = blogs.find(b => b.id === id)

  if (!post) return (
    <Layout>
      <section className="container-max mt-10 text-center">
        <h1 className="text-2xl font-bold mb-2">Post not found</h1>
        <Link to="/blog" className="btn mt-4 inline-block">← Back to Blog</Link>
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

  // Related blogs: same category → sort by latest → exclude current
  let related = blogs
    .filter(b => b.id !== post.id && b.category === post.category)
    // .sort((a, b) => new Date(b.date) - new Date(a.date))

  // Ensure at least 3 posts (fill from all blogs if fewer)
  if (related.length < 3) {
    const others = blogs
      .filter(b => b.id !== post.id && !related.includes(b))
      // .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3 - related.length)
    related = [...related, ...others]
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

      <section className="container-max mt-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 max-w-6xl mx-auto">

        {/* Left: Blog Content */}
        <article className="prose dark:prose-invert max-w-none">
         

          {/* Header */}
          <p className="text-sm opacity-60">
            {post.category} • {dayjs(post.date).format('MMM D, YYYY')} • {post.readingMinutes} min read
          </p>
          <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
          <img
            src={post.cover}
            alt={post.title}
            title={post.title}
            className="rounded-2xl mt-4"
          />

          {/* Markdown Content */}
          <div className="prose dark:prose-invert max-w-none mt-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Share Buttons */}
          <section className="mt-10 border-t pt-6">
            <div className="flex gap-4">
            <h3 className="text-lg font-semibold mb-3">Share with :</h3>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://subhamgupta.com.np/blog/${post.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                <i className="fa-brands fa-facebook text-2xl"></i>              
                </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://subhamgupta.com.np/blog/${post.id}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                <i className="fa-brands fa-linkedin text-2xl"></i> 
              </a>
            </div>
          </section>

         
          {/* Newsletter / CTA */}
          {/* <section className="mt-12 bg-muted/30 p-8 rounded-xl text-center">
            <h3 className="text-lg font-semibold mb-2">Enjoyed this post?</h3>
            <p className="mb-4 text-sm opacity-80">
              Subscribe to my newsletter to get more tutorials and insights directly in your inbox.
            </p>
            <Link to="/newsletter" className="btn inline-block">Subscribe</Link>
          </section> */}

          {/* Back to Blog */}
          <Link to="/blog" className="btn mt-10 inline-block">← Back to Blog</Link>
        </article>

        {/* Right: Related Blogs Sidebar */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-muted/20 dark:bg-muted/30 rounded-xl border border-border/30 p-5">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Related Posts</h2>
            <ul className="space-y-4">
              {related.map(r => (
                <li key={r.id} className="group border-b last:border-none pb-3">
                  <Link
                    to={`/blog/${r.id}`}
                    className="flex flex-col transition hover:translate-x-1"
                  >
                    <span className="font-medium text-base group-hover:text-primary transition-colors">
                      {r.title}
                    </span>
                    <span className="text-xs opacity-60 mt-1">
                      {dayjs(r.date).format('MMM D, YYYY')} • {r.readingMinutes} min read
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </section>
    </Layout>
  )
}
